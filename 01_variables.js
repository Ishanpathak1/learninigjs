const accountId = 144553
let accountEmail = "ishan.pathak2711@gmail.com"
var accountPassword = "12345"
accountCity = "Ahemdabad" //It can be declared that way, but don't use this
let accountState;

// accountId=2 //this is not allowed
accountEmail="ip@ip.com"
accountPassword="2711"
accountCity="Vadodara"
console.log(accountId)
/*Please don't use VAR, because of issue in blockscope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity])