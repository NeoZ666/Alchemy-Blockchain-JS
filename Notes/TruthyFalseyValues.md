***Here, the code will only return 0 for no params passed when it's written on the right side,
since the one on the right is the "default" value. So even if x*2 is falsey value i.e undefined
it will simply default to 0.***
```
function double(x) {
    return x * 2 || 0;
}

module.exports = double;
```
