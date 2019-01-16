// Define variables
var memory = [[]];        //variable to store input as array so they be turned into string to be compared with expressions
    result = 0;         //variable to store result
    memoryIndex = 0;      //variable to help navigate through array
    dotCount = 0;      //variable to keep track of number of dots to avoid user using more than one dot
    operatorCount = 0;       //variable to keep track of operators to avoid user inserting two operators at once
    numCount = 1;            //variable to keep track of the numbers passed to an operator
    errorMessage = "Something went wrong.";     
    output = document.getElementById("output");                //variable to display number entered before operator
    outputOperations = document.getElementById("outputOperations");        //variable to display number entered after operator


    //Additional Feature: keyboard input
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "0":
    collectMemory(0);
    break;
    case "1":
    collectMemory(1);
    break;
    case "2":
    collectMemory(2);
    break;
    case "3":
    collectMemory(3);
    break;
    case "4":
    collectMemory(4);
    break;
    case "5":
    collectMemory(5);
    break;
    case "6":
    collectMemory(6);
    break;
    case "7":
    collectMemory(7);
    break;
    case "8":
    collectMemory(8);
    break;
    case "9":
    collectMemory(9);
    break;
    // Operator Keys
    case "+":
    operator("+");
    break;
    case "-":
    operator("-");
    break;
    case "/":
    operator("/");
    break;
    case "*":
    operator("*");
    break;
    // Dot or Comma Value
    case ".":
    collectMemoryDot(".");
    break;
    case ",":
    collectMemoryDot(".");
    break;
    // Enter or Equal
    case "Enter":
    calculate();
    break;
    case "=":
    calculate();
    break;
    // Backspace = delete last input
    case "Backspace":
    ce();
    break;
    // Escape = AC
    case "Escape":
    ac();
    break;
    default:
    return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);


// Collect value of Numbers 0-9 and push in memory array
// output.value joined, because live output
function collectMemory (value){
  if(numCount === 0) {
    memoryIndex++;
    memory[memoryIndex] = [];
  }
  memory[memoryIndex].push(value);
  if(memory[memoryIndex][0] === 0 && memory[memoryIndex].length > 1 && memory[memoryIndex][1] != "."){            //if user enters an number after zero,only that number is displayed
    console.log("01");
    output.value = memory[memoryIndex][1];
  } else {
    output.value = memory[memoryIndex].join("");                            //display all numbers
  }
  console.log("memory number", memory);
  operatorCount = 1;
  numCount = 1;
}


// Check for FLOAT numbers / DOT
// Increase dotCount, only one Dot per number possible
function collectMemoryDot (value){
  if(dotCount === 0){
    memory[memoryIndex].push(value);
    output.value = memory[memoryIndex].join("");
    console.log("memory dot", memory);
    dotCount++;
  }
}

// Check for operator input
// operatorCount === 0 prevents double input
function operator (value){
  if(operatorCount === 1){
    if(memory[memoryIndex].length !== undefined){
      memory[memoryIndex] = parseFloat(memory[memoryIndex].join(""));
      console.log("memory operator if", memory);
    }
    memoryIndex++;
    console.log(memoryIndex);
    memory[memoryIndex] = [];                  //empties memory array to be able to add a new number
    memory[memoryIndex].push(value);
    output.value = memory[memoryIndex].join("");
    console.log("memory operator", memory);
    numCount = 0;
    dotCount = 0;
    operatorCount = 0;
    outputOperations.value = memory.join("");
  }
}


function calculate (){
  if(/[0-9]/.test(memory[memoryIndex][0]) && memoryIndex > 0){
    if(memory[memoryIndex].length > 1){
      memory[memoryIndex] = parseFloat(memory[memoryIndex].join(""));
    } else {
      memory[memoryIndex] = parseFloat(memory[memoryIndex]);
    }
    result = eval(memory.join(""));              //evaluates expression enterd by the user
    result = Math.round(result*100)/100;             //makes sure result doesn't exceed 2 floating points
    output.value = result;
    console.log("memory result Calculate", memory, result);
    memory = [result];               //keeps current result in memory
    memoryIndex = 0;
    countCE = 0;
    operatorCount = 1;
    outputOperations.value = memory.join("");
  }

}



