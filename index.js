//! DO NOT COPY PASTE CODE

//? FOR QUESTION NUMBER 1 - 3 YOU CAN'T USE BUILT IN FUNCTION
// Example built in function : toLowerCase, reduce, find, sort, etc...

//* 1. SORT NUMBER
function sortingNumber(numbers) {
    //code here
    return numbers
}

const randomNumber = Array.from({ length: 10 }, (_) => Math.floor(Math.random() * 100))
console.log(sortingNumber(randomNumber));


//* 2. PRIME NUMBER
function findPrimeNumbers(from, to) {
    //code here
    const primeNumbers = []
    return primeNumbers
}

console.log(findPrimeNumbers(3, 3));


//* 3. MODUS
// find the most numbers that appear, if the most numbers are more than one then choose the largest among them
function modus(numbers) {
    //code here
    return
}

const repeatedNumber = [1, 2, 4, 1, 4, 0, -1, -11, 5, 1, 4, 5]
console.log(modus(repeatedNumber));



//? NOW YOU CAN USE ANY BUILT IN FUNCTION
// Example built in function: toLowerCase, reduce, find, sort, etc...

//* 4. MATCH THE REQUIRE
// Find the player who matches the required job and power must be more than the minimum power.
// example result :
// {
//   Swordman: {
//     totalPower: 10000,
//     heroes: [ 'Kirito' ]
//   },
//   Mage: {
//     totalPower: 8000,
//     heroes: [ 'Xin' ]
//   }
// }


const player = [
    { name: 'Kirito', job: 'Swordman', power: 10000 },
    { name: 'Dazzle', job: 'Cleric', power: 8000 },
    { name: 'Xin', job: 'Mage', power: 8000 },
    { name: 'Sinon', job: 'Archer', power: 11000 },
    { name: 'Asuna', job: 'Swordman', power: 5800 },
    { name: 'Razzil', job: 'Merchant', power: 9000 },
    { name: 'Darkbrew', job: 'Merchant', power: 9999 },
    { name: 'Wizz', job: 'Blacksmith', power: 9000 },
    { name: 'Alice', job: 'Swordman', power: 3000 }
];

function filterGuild(job, minPower) {
    //code here
    let result = {}
    return result
}

console.log(filterGuild(['Swordman', 'Merchant'], 8500));



//? QUESTION ABOUT JS FUNCTION
//* 5. CALCULATOR
function sum() {
    //code here
}

// console.log(sum(2)(3)); 
// ==> must return 5


//* 6. CALCULATOR
function divide(x, y) {
    return x / y
}

function times(x, y) {
    return x * y
}

function subtract(x, y) {
    return x - y
}

console.log(); // do 3 times 10 divided by 2 and subtracted by 9 with just the given function, you can't use math operator like (*), (/), or (-)
// so the result are same like (3 * 10 / 2) - 9


//* 7. SELF-INVOKING
// invoke the function below using self-invoking, so you cannot use it like the example : invokeMe()
function invokeMe() {
    console.log('Awesome');
}