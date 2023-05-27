function makeRequest(location) {
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`);
        if(location.toLowerCase()==="google") {
            resolve("You have accessed google.com");
        }
        else {
            reject("We can only connect to google");
        }
    })
}

function processRequest(response) {
    return new Promise((resolve,reject)=>{
        console.log("Processing response")
        resolve(`data after ${response}`);
    })
}

makeRequest("GoOgle").then(response=>{
    console.log("Response received from google.com");
    processRequest(response);
}).then(processResponse=>{
    console.log(processResponse);
}).catch(error=>{
    console.error(error);
})
