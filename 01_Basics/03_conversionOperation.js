let score = "33abc"

console.log(typeof score);

let valueinNumber = Number(score);


console.log(typeof valueinNumber);
console.log(valueinNumber);


//"33"=> 33
//"33abc" => NaN
//true =>1
//undefined => Nan
//null =>0

let isLoggedin = 1
let booleanisLoggedIn = Boolean(isLoggedin);
console.log(booleanisLoggedIn);

//1 => true
//""=> false, "a"=> true
//null => false




// ************************************oprations************************************

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2");    //32

console.log(+true); //1

let counter =100;
console.log(++counter);
console.log(counter++);