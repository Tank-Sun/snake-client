const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and print it out for client
  conn.on("data", data => console.log(data));
};

module.exports = {connect};