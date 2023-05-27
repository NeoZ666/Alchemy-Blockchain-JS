***Using Promises***

JavaScript is single-threaded. Because of this you will find yourself writing quite a bit of asynchronous code. This refers to writing code that will execute at some future point in time after something has happened.

Providing a callback function as an argument is a classic way of handling asynchronous code. We went over this approach in Callback Functions.

Promises provide an alternative:
```
const promise = getServerData();

// similar to using a callback function argument,
// except we wire up the callback using .then 
promise.then(function(data) {
    // this function is called asynchronously
    // once the server has responded with data
    console.log('got data', data);
});
```
Here getServerData returns a promise.

We can call .then and provide a function that is invoked once the server data is resolved.
Your Goal: Make the Food!

We need to make some food!

When the customer asks for food, the request function will be invoked. This function should call the function makeFood which takes food as its only argument. The function makeFood will return a promise.

>The makeFood function is imported at the top of the file from Kitchen.

Add a callback function to the .then of the makeFood promise. Once it is called the food is ready! At that point set the order isReady is true.
