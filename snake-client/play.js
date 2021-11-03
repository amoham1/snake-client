const net = require("net");

const connect = require("./client");
const setupInput = require("./input");


const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
connect();
setupInput(handleUserInput);