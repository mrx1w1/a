    let emails = document.getElementsByTagName("span");
    for (let i = 0; i < emails.length; i++) {
        let data = emails[i];
        let data_s = data.textContent;  // or data.innerText

        //console.log(data_s);
        for (let j = 0; j < data_s.length; j++) {
            if (data_s[j] === "@") {
                console.log(data_s); 
            }
        }
    }
