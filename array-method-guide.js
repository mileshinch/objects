
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
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// look through users
// turn each user into an object with id and full name
// let usersMapped = users.map(getIdAndFullname)

// function getIdAndFullname(item) {
//     let obj = {id:"", fullname:""}
//     obj.id = item.id
//     obj.fullname = item.name + " " + item.surname
//     return obj
// }

//Write the function sortByAge(users) that gets an array of objects
// with the age property and sorts them by age.
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

function sortByAge(users) {
    users.age.sort((x,y) => x - y)
}

// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// Write the function shuffle(array) 
// that shuffles (randomly reorders) elements of the array.

function shuffle(arr) {
    console.log(arr)
    // map each element of arr to an array of length 2
    // made up of the original elemenets + a random number
    let twoDArray = arr.map(element => [element, Math.random()])
    console.log(twoDArray)
    // sort array by math random
    let sortedTwoDArray = twoDArray.sort((a,b) => a[1] - b[1])
    console.log(sortedTwoDArray)
    // map first values of sub arrays to new array
    let shuffledArray = sortedTwoDArray.map(subArray => subArray[0])
    return shuffledArray

}

// Write the function getAverageAge(users) 
// that gets an array of objects with property age and returns the average age

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    // get an array of ages
    let arrayOfAges = users.map(element => element.age)
    console.log(arrayOfAges)
    // reduce the array to a single number - the sum
    let sumOfAges = arrayOfAges.reduce((sum, current) => sum + current, 0)
    console.log(sumOfAges)
    // divide by length of array for the average
    let averageAge = sumOfAges / arrayOfAges.length
    return averageAge  
}

// let arr be an array
// write function that returs an array with unique items of arr

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        // check if the element appears in a later position of the array
        if (arr.includes( arr[i], i + 1)) {
            // if it does then remove that element and decrease i
            arr.splice( i, 1)
            i--
        } else {
            // if it doesn't then move to the next element
            continue;
        }
    }
    return arr
        
}

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, 
// with id as the key, and array items as values.
