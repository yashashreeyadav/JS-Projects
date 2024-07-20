//var c=300
let a =300

if(true){
    let a=10     //local
const b=20          //local
var c=30       //global svope
}


// console.log(a);
// console.log(c);

function one(){
    const username = "Yash"

    function two(){
        const website = "Youtube"
        console.log(username);      //allowed
    }

    //sconsole.log(website);            //not allowed
    two();
}

//one()

if(true)
    {
        const username = 'Dillumianti'
        if(username === 'Dillumianti')              //website can be accessed only under this if loop
        {
            const website = "Hi Diljeet"
            console.log(username +" "+ website);
        }
        //console.log(website);         //not allowed
    }
//console.log(username);            //not allowed


//********************************************Interesting************************************************** *//

console.log(addone(5))                      //this one can be used before definition because of hoisting
function addone(num){
    return num + 1
}


console.log(addTwo(5));                     //gives error because function is written in expression format, hoisting does not happens for variables
const addTwo = function(num){                       
    return num +2
}

