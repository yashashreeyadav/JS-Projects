//Primitive

//7 types : Stroing, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 103.3

let userEmail;

console.log(typeof scoreValue);

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNum = 123456n
console.log(typeof bigNum);

//Reference(Non Primitive)

//Array, Objects, Functions


const heroes = ["shaktiman", "ironman"]

let obj={
    name: 'yash'
}

const myfunc = function(){

    console.log("Hi");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "hiteshChaoudharydotcom"

let anotherName = myYoutubeName                   //copy is passed and not the reference to variable
anotherName = "ChaiaurCode"
console.log(anotherName);
console.log(myYoutubeName);


let user = {
    email : 'user@google.com',
    upi : 'user@ybl'

}

let user2 = user                                           //pass by reference, any change in later assigned value will change actual values

user2.email = "Yash"

console.log(user);
console.log(user2);