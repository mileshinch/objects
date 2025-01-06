let myArray = [1,2,3,4,5];

function sumOfTripledEvens(array) {
    // use filter to remove odd number
    array = array.filter((num) => num % 2 === 0);
    // use map to triple
    array = array.map((num) => num * 3);
    // use reduce to sum them
    const myAnswer = array.reduce((total,currentItem) => {
        return total + currentItem;
    })
    return myAnswer
}




