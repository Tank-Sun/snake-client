const {connect} = require('./client');

// setup interface to handle user input from stdin

const setupInput = function() {
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
};

console.log("Connecting ...");
connect();
setupInput();