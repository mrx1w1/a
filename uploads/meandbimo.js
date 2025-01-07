fetch('https://insider.in/users/updateProfile', {
  method: 'POST',
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://insider.in/users/me/profile',
    'Content-Type': 'application/json; charset=UTF-8',
    'Request-Id': '53e2fe70-a04f-461d-9e0a-e4c6ec334116',
    'Origin': 'https://insider.in',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Priority': 'u=4',
    'Te': 'trailers'
  },
  body: JSON.stringify({
    first_name: 'PoCwwww',
    last_name: '4mrx',
    phone_no: '+213549281855',
    delivery_details: {},
    billing_details: {},
    promotional_emails: 'always'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
