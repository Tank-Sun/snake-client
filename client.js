const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print out message and send name to server when connection starts

  conn.on("connect", () => {
    console.log('connection start!');
    // conn.write("Move: left");
    // conn.write("Move: up");
   
    // setInterval(() => conn.write("Move: up"), 50);
    
    conn.write("Name: YS");

  });

  // handle incoming data and print it out for client
  conn.on("data", data => console.log(data));

  return conn;
};

module.exports = {connect};