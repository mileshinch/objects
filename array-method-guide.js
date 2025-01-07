
function camelize(str) {
    // split the string into an array
    let arr = str.split('-');
    arr = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    camelizedString = arr.join('')
    camelizedString = camelizedString.charAt(0).toLowerCase() + camelizedString.slice(1);
    return camelizedString;
}

function filterRange(arr, a, b){
    
    // keep items which are higher or equal to a and lower or equal to b
    let filteredArray = arr.filter(item => (item >= a ) && (item <= b))

    return filteredArray

}

// a way to filter that modifies the existing array
function filterRangeInPlace(someArray, a, b) {
    //loops through elements of an array
    for (let i = 0; i <= someArray.length; i++) {
        // if that element is less than a or more than b then remove it
        if (someArray[i] < a || someArray[i] > b) {
            someArray.splice(i, 1)
            i--
        }
    }

}

// sort numerical array in descending order
function sortDecreasing(arr) {
    sortedArray = arr.sort((x,y) => y - x)
    return sortedArray;
}

// copy and sort array of strings
// keep original array unmodified