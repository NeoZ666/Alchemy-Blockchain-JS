function scream(n) {
    if (n===0) {
        return "";
    }
    if (n===1) {
        return "a";
    }
    if (n>1) {
        return ("aA" + scream(n-2));
    }
}

module.exports = scream;
