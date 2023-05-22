Write a function countElements that takes in an array and returns an object a count of each element in the array.
```
const elements = ["e", "k", "e", "z", "i", "z"];
countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}
```

Answer:
```
function countElements(array) {
    const count = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    return count;
}

const elements = ["e", "k", "e", "z", "i", "z"];
console.log(countElements(elements)); // {e: 2, k: 1, z: 2, i: 1}
```

Explanation: 

    The countElements function takes in an array as a parameter.

    Inside the function, we create an empty object called count using the curly brackets {}. This object will store the count of each element in the array.

    We start a for loop to iterate over the elements of the array. The loop variable i is used as the index to access each element.

    Inside the loop, we retrieve the current element using array[i] and store it in a variable called element.

    Next, we check if the count object already has a property with the name equal to the element. We do this check using if (count[element]). If the property exists, it means we have encountered this element before, so we increment its count by 1 using count[element] += 1.

    If the element is not a property in the count object, we initialize its count to 1 by assigning count[element] = 1.

    The loop continues until all elements in the array have been processed.

    Finally, we return the count object, which contains the count of each element in the array.
