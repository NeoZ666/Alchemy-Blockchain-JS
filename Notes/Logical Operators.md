Logical Operators

In JavaScript, there are logical operators that will help us concisely express complex conditions.

Let's say we wanted to travel to an island by boat or by plane. In English, we use or in the previous sentence to express we're willing to take either mode of transportation.

In JavaScript, we can use ||:

```
const boat = true;
const plane = false;

const willTravel = boat || plane;

console.log(willTravel); // true
```
In the example above, one of the conditions is true in the OR operation (the boat), therefore the value stored in willTravel is true!

The || operator is commonly referred to as the Logical OR because it will evaluate to true if either (or both) of the inputs are true.

Additionally we'll see an AND operator for requiring both conditions to be true. As well, we'll see a NOT operator for negating a condition.
