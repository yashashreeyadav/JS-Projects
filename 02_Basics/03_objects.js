//singleton
//Object.Create()

//object lterals

const mySym = Symbol("key1")

const JsUser = {
    name : "Yashashree",
    "full name" : "Mai Nahi Bataungi",
    [mySym]:"myKey1",
    age : 18,
    location : "Pune",
    mail :"hiolou@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.name);
// console.log(JsUser['name']);

// console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// JsUser.age =20;

// Object.freeze(JsUser);       //used to lock values of  object
// JsUser.name="Hello"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("In greeting");
}

console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}


console.log(JsUser.greetingTwo());