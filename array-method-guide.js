let myString = 'my-short-string'

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
