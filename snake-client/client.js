const net = require('net');
const {IP, PORT} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write('Name: SIG');
  });
  conn.on("connect", (data) => {
    //conn.write("Move: up");
  });

  return conn;
};

module.exports = connect;