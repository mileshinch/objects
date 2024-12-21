let myString = 'my-short-string'

function camelize(str) {
    // split the string into an array
    let arr = str.split('-');
    arr = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    camelizedString = arr.join('')
    camelizedString = camelizedString.charAt(0).toLowerCase() + camelizedString.slice(1);
    return camelizedString;
}

