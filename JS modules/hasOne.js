function hasOne(array) {
    let bool = false;
    for(let i=0;i<array.length;i++) {
        if(array[i]===1) {
            bool = true;
            break;
        }
        else {
            bool = false;
        }
    }
    return bool;
}

module.exports = hasOne;
