/*
    Some example of applications of map, reduce and filter methods.
*/


let arr = [1, 2, 3, 4, 5, 6];

let filterArr = arr.filter(a => a % 2 === 0);
let mapArr = arr.map(a => a % 2 === 0);
//console.log(filterArr);
//console.log(mapArr);

let sqrdArr = arr.map(x => x**2);
console.log(sqrdArr)


// reduce
let sum = arr.reduce((num1, num2) => {
    return num1 + num2;
});
console.log(sum)

// wrap all together
// sum of all squared of even numbers of array
let newArr = arr.filter(x => x % 2 == 0).map(x => x*x).reduce((x, y) => x + y);
console.log(newArr)


// another case
let orders = [
    {
        userId: 1,
        amount: 10
    },
    {
        userId: 1,
        amount: 15,
    },
    {
        userId: 2,
        amount: 5
    },
    {
        userId: 2,
        amount: 100
    }
]

// calculate the total amount of userId 1
let e = orders.filter(x => x.userId === 1).map(x => x.amount).reduce((x, y) => x + y);
console.log(e)
