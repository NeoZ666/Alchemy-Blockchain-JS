OBJECTS
6: Object Keys
Find the Number of Keys

There are a couple of ways to get all the keys in an object.

We can use the in operator to iterate over all properties:

```
const object = { a: 1, b: 2, c: 3 } 
for(let key in object) {
    console.log(key);
}
```

Over three iterations this will log a, b and c which are the keys of object.

Additionally, ***we can use some methods on the Object constructor itself, which will return an Array of the requested data***:

```
const object = { a: 1, b: 2, c: 3 } 
console.log( Object.keys(object) ); // ['a', 'b', 'c']
console.log( Object.values(object) ); // [1, 2, 3]
```

There are actually quite a few methods on Object, you can find them all [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor)
