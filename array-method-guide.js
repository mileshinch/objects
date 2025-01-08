
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

function copySorted(arr) {
    // slice() creates a copy of the array
    // then sort it
    return arr.slice().sort();
}

// You have an array of user objects, each one has user.name.
// Write the code that converts it into an array of names.
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name)

// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, 
// where fullName is generated from name and surname.
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

// look through users
// turn each user into an object with id and full name
let usersMapped = users.map(getIdAndFullname)

function getIdAndFullname(item) {
    let obj = {id:"", fullname:""}
    obj.id = item.id
    obj.fullname = item.name + " " + item.surname
    return obj
}


