(function wipeAndReplace(content='hey') {
  // 1️⃣ Remove all child nodes from <html>
  const html = document.documentElement;
  while (html.firstChild) {
    html.removeChild(html.firstChild);
  }

  // 2️⃣ Optional: reset <html> styles to prevent hidden elements
  html.style.margin = '0';
  html.style.padding = '0';
  html.style.width = '100vw';
  html.style.height = '100vh';
  html.style.overflow = 'hidden';

  // 3️⃣ Create a new <body> element
  const body = document.createElement('body');
  body.style.margin = '0';
  body.style.padding = '0';
  body.style.width = '100%';
  body.style.height = '100%';
  body.style.display = 'flex';
  body.style.alignItems = 'center';
  body.style.justifyContent = 'center';
  body.style.fontSize = '48px';
  body.style.fontFamily = 'sans-serif';
  body.style.background = '#fff';
  body.textContent = content; // Put "hey" here

  // 4️⃣ Append the new <body> to <html>
  html.appendChild(body);

  // ✅ Optional: override <head> completely
  const head = document.createElement('head');
  html.insertBefore(head, body); // keeps <head> before <body>

  // 5️⃣ Make sure scripts, styles, and events from old page are gone
  window.onload = null;
  window.onbeforeunload = null;
  window.onscroll = null;
  document.onkeydown = null;
})();
