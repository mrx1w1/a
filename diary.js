fetch('https://www.myfitnesspal.com/user/auth_token?refresh=true', {
    method: 'GET',
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
  .then(data => accessx=data["access_token"])
  .catch(error => console.error('Error:', error));




  fetch('https://www.myfitnesspal.com/photos/edit')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(html => {
    processHTML3(html);  // Call the function to process the HTML and extract CSRF token
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function processHTML3(htmlString) {
  // Create a DOM parser
  let parser = new DOMParser();
  let doc = parser.parseFromString(htmlString, 'text/html');

  // Extract the CSRF token from the meta tag
  let csrfMeta = doc.querySelector('meta[name="csrf-token"]');
  let csrfTokenx = '';
  if (csrfMeta) {
    csrfTokenx = csrfMeta.getAttribute('content'); // Get the value of the 'content' attribute
    for_all(csrfTokenx,accessx)
    console.log(`CSRF Token: ${csrfTokenx}`); // Logs the CSRF token
  }
  
}

function for_all(token,aaa){

for(i=0;i<=5;i++){
fetch('https://www.myfitnesspal.com/food/add', {
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Origin': 'https://www.myfitnesspal.com',
      'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
      'Authorization': 'Bearer '+aaa,
      'X-Csrf-Token': token,
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Priority': 'u=0'
    },
    body: "food_entry%5Bfood_id%5D=2689909138&food_entry%5Bdate%5D=2024-10-18&food_entry%5Bquantity%5D=1.0&food_entry%5Bweight_id%5D=3099756008&food_entry%5Bmeal_id%5D="+i+"&ajax=true"
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}
}
