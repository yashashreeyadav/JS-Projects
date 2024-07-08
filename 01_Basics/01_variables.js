const accountId=144553
let accountEmail="abc@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

//accountId=23    //not allowed

accountEmail="pio@com"
accountPassword = "90890"
accountCity = "NY"

console.log(accountId);

// Prefer not to use var
// because of issue in block scope and functional scope


console.table([accountEmail,accountId, accountPassword, accountCity,accountState])