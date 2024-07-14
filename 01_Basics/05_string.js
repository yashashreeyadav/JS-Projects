const name="Yash"
const repoCount = 50

console.log(name + repoCount);

console.log(`hello ${name} & my number is ${repoCount}`);

const gameName = new String("GTA Vice Citty - version")

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5);

console.log(newString)

const anotherstring = gameName.slice(-23,-20);

console.log(anotherstring)

const str1 = "      hello     "
console.log(str1);
console.log(str1.trim());

const url="https://yash.com/yash%20yadav"


console.log(url.replace('%20','-'));

console.log(url.includes('yash'));
console.log(url.includes('rushi'));

console.log(gameName.split('-'));

console.log(gameName.bold());