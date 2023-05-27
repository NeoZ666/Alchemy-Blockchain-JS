// let's do the same shit of ./promises.js using Async-Await

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

async function doThing() {
    try{ const response = await makeRequest("gooGle"); } catch(error){ console.error(error); }
    console.log("Response received from google.com");
    const processResponse = await processRequest(response);
    console.log(processResponse);
}
