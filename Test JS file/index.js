let message;

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById("myh1").innerHTML = output;
}

function setMessage(text, callback) {
    message = text;
    callback(message);
}

setMessage("Hey there", displayDOM)

// The callback function does the same job as:

function setMessage(text) {
    message = text;
    displayDOM(message)
}

setMessage("Hey there")