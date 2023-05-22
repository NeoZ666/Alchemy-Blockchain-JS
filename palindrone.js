function isPalindrome(string) {
    let bool = true;
    for(let i=1;i<string.length;i++) {
        if (string[string.length-i] !== string[i-1]) {
            bool = false;
            break;
        }
    }
    return bool;
}

module.exports = isPalindrome;
