const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write('Name: g$$');
  });
  conn.on("connect", (data) => {
    // move my snake up
    conn.write("Move: up");
  });
  
  return conn;
};

module.exports = connect;