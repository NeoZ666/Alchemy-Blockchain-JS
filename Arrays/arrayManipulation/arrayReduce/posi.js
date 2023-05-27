// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        // if initial value is given as second argument, then accumulator becomes that 
        return (accumulator<currentValue) ? currentValue : accumulator 
    },1);
}

module.exports = largest;
