const tinderUser =  new Object();      //Singleton object
//const tinderUser={}     //NON-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Vicky"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"Vikas",
            lastname : 'Yadav'
        }
    }
}

//console.log(regularUser.fullname?.userfullname?.lastname);

const obj1 = {
    1: "a", 2:"b"
}

const obj2 = {
    3: "c", 4:"d"
}

// // const obj3 = {obj1, obj2}
// obj3=Object.assign({},obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users =[{
    id:1,
    email:"we@gmail.com"
},
{
    id:2,
    email:"we1@gmail.com"
}]

console.log(users[1].email)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));     //[ [ 'id', '123abc' ], [ 'name', 'Vicky' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('name'));

const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course              //object desctructuring

//console.log(courseInstructor);
console.log(instructor);

// JSON structure : Javascript Object Notation
// {
//     "name" : "hitesh",
//     "coursename" : "JS in Hindi ",
//     "price" : "free"
// }