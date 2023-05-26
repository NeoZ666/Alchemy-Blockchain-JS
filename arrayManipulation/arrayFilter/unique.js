function unique(array) {
    const map = new Map();
    array.forEach((element,i)=>{
        if (!map.has(element)) {
            map.set(element,i)
        }

    })
    return Array.from(map.keys());
}

module.exports = unique;
