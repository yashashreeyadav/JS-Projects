
function addTwoNumbers(num1, num2){
    //console.log(num1+ num2);
    return num1+ num2;
}

const result = addTwoNumbers(10,44);
//console.log(result);

function loginUserMessage(username ="Rushikesh"){
    if(!username)
    {
        console.log(`Please enter a username`);
        return
    
    }
    return  `${username} just logged in!`;
    
}

const message = loginUserMessage("Yashashree");
//console.log(message)

//console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}



//console.log(calculateCartPrice(200,300,400,500));

const user = {
    username :"yash",
    price :199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username :"sam",
    price :199
})

const myNewArray=[200, 300, 100, 600]

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,200]));

