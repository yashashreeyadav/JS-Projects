
const myArr = [0, 1, 2, 3, 4, 5, true, "yash"]

const heroes = ["ironman", "spiderman"];

const myarr2 = new Array(1, 2, 3)

console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()

// console.log(myArr);

// myArr.unshift(9);       //Added 9 at start of array
// console.log(myArr);

// myArr.shift()       //removes first element from array

// console.log(myArr);


// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));   //-1 --> value does not exist in arr
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()     //gives string format in array

// console.log(myArr);
// console.log(typeof newArr);

//Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);     //includes index 1 excludes 3

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)          //inclusdes both indexes but cuts array into 2 parts

console.log(myn2);              //[ 1, 2, 3 ]

console.log("C", myArr);  //C [ 0, 4, 5, true, 'yash' ]