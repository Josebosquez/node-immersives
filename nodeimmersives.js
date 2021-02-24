// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1);
const lastName = getInput(2);

console.log("Hello, " + getInput(1) + " " + getInput(2))
console.log(firstName.toUpperCase() + " " + lastName.toUpperCase())

