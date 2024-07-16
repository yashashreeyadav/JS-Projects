let myDate = new Date();
console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

//let myCreatedDate = new Date(2023, 10, 27)      //month starts from 0
let myCreatedDate = new Date("2023-11-27")          //month starts from 1
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()        //value in milliseconds

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());   //gives value in ms
// console.log(Math.floor(Date.now()/1000));   //value in seconds

let newDate = new Date()

console.log(newDate.getMonth()+1);

let Hiday = newDate.toLocaleString('default', {weekday: "long"
})