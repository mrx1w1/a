async function createUser() {
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

    const body = {
      emails: ["mathmrx96@gmail.com"], 
      cost_per_billing_cycle: 0,
      seats_to_add: 0,
      due_now: 0,
      force_purchase: true,
      campaign: "team_member_invite_bulk_modal",
      permission_set_id: permissionSetId,
      cacheKey: Date.now()
    };

    const csrfToken = document.querySelector("meta[name='csrf-token']")?.content || "";

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
    alert("✅ Bulk create result:\n" + JSON.stringify(result, null, 2));
  } catch (err) {
    alert("❌ Error: " + err.message);
  }
}

createUser();
