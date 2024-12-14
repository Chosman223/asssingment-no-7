const userInput = prompt("input 1 to turn on,0 to turn off:");//prompt is not available in node.js 

if (userInput === 1) {
  console.log("The light is on");
} else if (userInput === 0) {
  console.log("The light is off");
} else {
  console.log("Invalid Input");
}