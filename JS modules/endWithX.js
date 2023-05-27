function endsWithX(string) {
    const len = string.length;
    return (string[len-1].toLowerCase() === 'x') ? true : false
}

module.exports = endsWithX;

// Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if the last character is either lower-case x or upper-case X, false otherwise.
