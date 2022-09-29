
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // creat an event listener for stdin
  // runs handleUserInput when receiving input from keyboard
  stdin.on("data", handleUserInput);

  return stdin;
};

// callback function for stdin.on("data", handleUserInput)
const handleUserInput = function(key) {
  
  // terminate the game when ctrl + C is inputed
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 'h') {
    connection.write("Say: Hello!");
  }

  if (key === 'r') {
    connection.write("Say: Run faster!");
  }

  if (key === 'f') {
    connection.write("Say: I am coming!");
  }

  if (key === 'q') {
    connection.write("Say: I am the longest one");
  }
};


module.exports = {setupInput};