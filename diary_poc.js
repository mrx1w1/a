function add_diary() {
    let accessToken; // Declare a variable to hold the access token
    let csrfTokenx = ''; // Declare a variable to hold the CSRF token

    // Fetch access token
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
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        accessToken = data["access_token"]; // Assign the access token to the variable
        console.log(`Access Token: ${accessToken}`); // Log the access token for verification

        // Fetch CSRF token
        return fetch('https://www.myfitnesspal.com/photos/edit');
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        csrfTokenx = processHTML3(html);  // Call the function to process the HTML and extract CSRF token
        console.log(`CSRF Token: ${csrfTokenx}`); // Log the CSRF token for verification

        // Now, make the POST requests
        for (let i = 0; i <= 5; i++) {
            fetch('https://www.myfitnesspal.com/food/add', {
                method: 'POST',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
                    'Accept': 'application/json, text/plain, */*',
                    'Accept-Language': 'en-US,en;q=0.5',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Origin': 'https://www.myfitnesspal.com',
                    'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
                    'Authorization': 'Bearer ' + accessToken,
                    'X-Csrf-Token': csrfTokenx,
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Site': 'same-origin',
                    'Priority': 'u=0'
                },
                body: "food_entry%5Bfood_id%5D=2689909138&food_entry%5Bdate%5D=2024-10-18&food_entry%5Bquantity%5D=1.0&food_entry%5Bweight_id%5D=3099756008&food_entry%5Bmeal_id%5D=" + i + "&ajax=true"
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }
    })
    .catch(error => console.error('Error:', error));

    // Define the processHTML3 function to extract the CSRF token
    function processHTML3(htmlString) {
        // Create a DOM parser
        let parser = new DOMParser();
        let doc = parser.parseFromString(htmlString, 'text/html');

        // Extract the CSRF token from the meta tag
        let csrfMeta = doc.querySelector('meta[name="csrf-token"]');
        if (csrfMeta) {
            return csrfMeta.getAttribute('content'); // Get the value of the 'content' attribute
        }
        return ''; // Return an empty string if no token is found
    }
}

// Call the add_diary function to execute
add_diary();
