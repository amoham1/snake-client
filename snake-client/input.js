const connect = require("./client");

// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  else if (key == 'w'){
    connection.write("Move: up");
    connection.write('Say: FTG K');
  }
  else if (key == 'a'){
    connection.write("Move: left");
    connection.write('Say: Come on ');
  }
  else if (key == 's'){
    connection.write("Move: down")
    connection.write('Say: GRRRT')
  }
  else if (key == 'd'){
    connection.write("Move: right")
    connection.write('Say: Regent')
  }

};



module.exports = setupInput;