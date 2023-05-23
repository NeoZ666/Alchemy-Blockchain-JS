// Given a string, convert it to a number.
// If the string is not a number, return 0

Method 1: Using isNaN() function
```
function toNumber(string) {
    return (isNaN(string)) ? 0 : Number(string)
}

module.exports = toNumber;
```

Method 2: Using default(OR) operator for falsey value
```
function toNumber(string) {
    return Number(string) || 0;
}

module.exports = toNumber;
```
