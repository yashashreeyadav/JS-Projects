const marvel_heroes = ["thor", "IronMan" , "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);    //[ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][0]);

// const all_heroes = marvel_heroes.concat(dc_heroes);    //always concats in new array, not existing one

// console.log(all_heroes)

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]    //concat can only combine 2 arrays while this method can combine more than 2 arrays, it's called spread

// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh")
);

console.log(Array.from({name:"jey0"}))   //will give []

console.log(Array.of(marvel_heroes, dc_heroes));






