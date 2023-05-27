# Async Await

Another useful tool in the asynchronous JavaScript toolbelt is async/await.

With these two keywords we can handle promises line-by-line like synchronous code:

```
async function getData() {
    const result = await serverCall();

    // this will not run until serverCall resolves/rejects
    return result;
}
```

In this example, serverCall returns a promise and the result is the resolved value.

>The return line does not run until after the serverCall promise is complete. This is the case for anything after the await line. See details for further explanation.

The above example is functionally equivalent to:

```
function getData() {
    return serverCall().then((result) => {
        return result;
    });
}
```

In both cases, getData returns a promise and the promise resolves with the result.

>You can think of async as a way of denoting that a function will return a promise. For full documentation on async see here.

## Your Goal: Relay the Results

We have a function handleResults which should retrieve a patient's results from a lab, send them to the patient, and record the response in logs.

![Relay](https://res.cloudinary.com/divzjiip8/image/upload/v1573092887/Frame_1_61_xvipqy.png)

The three functions have been imported for you. Each function returns a promise, so it can be used with async/await. You'll need to call these in order:

1. Pass the patientId to getResults. This will resolve with results.

2. Pass the patientId and results (in that order) to sendResults. This will resolve with response.

3. Pass the response to logResponse. There is no return value here. You can choose to either return the promise from logResponse or use await so the function will not resolve until after logResponse is complete.

>Notice that the async keyword has already been added to the handleResults function. This will allow us to use await within the function.
