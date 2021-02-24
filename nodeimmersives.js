// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1);
const lastName = getInput(2);

console.log("Hello, " + firstName + " " + lastName)
console.log("I will now capitalize your name" + " " + "[" + firstName.toUpperCase() + " " + lastName.toUpperCase() + "]")
console.log(firstName.toUpperCase()[0] + "." + lastName.toUpperCase()[0] + ".")
console.log(firstName + "." + lastName + "@codeimmersives.com")