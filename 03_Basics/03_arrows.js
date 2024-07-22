const user ={
    username: "Praju",
    price : 99,

    welcomeMessage : function(){
    console.log(`${this.username}, welcome to webssite`);
    console.log(this);
}

}
// user.welcomeMessage()

// user.username = "Sammy"

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = () =>{
//     let username = "Tanya"
//     console.log(this);
// }

// chai()  //op= {}

//1st way to write arrow func   = explicit return 
// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

//second way
const addTwo = (num1, num2)=> num1 + num2    //implicit return
console.log(addTwo(67, 89));

const objFunc = () => ({Name : "Tanu"})

console.log(objFunc());