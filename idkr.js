(function(target='https://example.com') {

  // 1️⃣ Clear the page
  if(document.body) document.body.innerHTML='';
  if(document.head) document.head.innerHTML='';

  // 2️⃣ Show iframe immediately
  const iframe = document.createElement('iframe');
  iframe.src = target;
  iframe.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;border:0;z-index:2147483647';
  iframe.setAttribute('sandbox','allow-forms allow-scripts');
  iframe.setAttribute('referrerpolicy','no-referrer');
  document.body.appendChild(iframe);
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  // 3️⃣ Override navigation functions
  const block = ()=>{};
  ['assign','replace'].forEach(f=>{ window.location[f]=block; });
  window.open = block;

  // 4️⃣ Disable beforeunload/unload events
  window.addEventListener('beforeunload', e=>{ e.stopImmediatePropagation(); e.preventDefault(); return null; }, true);
  window.addEventListener('unload', e=>{ e.stopImmediatePropagation(); e.preventDefault(); return null; }, true);

  // 5️⃣ Start a harmless infinite loop without freezing the browser
  setInterval(()=>{},1000);

  // 6️⃣ Optional: execute something after 20 seconds
  setTimeout(()=>{ console.log('20 seconds passed'); },20000);

})();
