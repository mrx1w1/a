const stop=ms=>{const e=Date.now()+ms;while(Date.now()<e);}
stop(20000); // blocks page for 2 seconds
