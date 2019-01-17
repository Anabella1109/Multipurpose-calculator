//business logic

// Define variables
var expressioN = [[]];        //variable to store input as array so they be turned into string to be compared with expressions
    result = 0,         //variable to store result
    index = 0,      //variable to help navigate through array
    dotCount = 0,     //variable to keep track of number of dots to avoid user using more than one dot
    operatorCount = 0,      //variable to keep track of operators to avoid user inserting two operators at once
    numCount = 1,            //variable to keep track of the numbers passed to an operator
    errorMessage = "Something went wrong.",     
    output = document.getElementById("output"),                //variable to display number entered before operator
    outputOperations = document.getElementById("outputOperations");     //variable to display number entered after operator
   


 
function collectMemory (value){
  if(numCount === 0) {
    index++;
    expressioN[index] = [];
  }
  expressioN[index].push(value);
  if(expressioN[index][0] === 0 && expressioN[index].length > 1 && expressioN[index][1] != "."){            //if user enters an number after zero,only that number is displayed
    
    output.value = expressioN[index][1];
  } else {
    output.value = expressioN[index].join("");                            //display all numbers
  }
  
  operatorCount = 1;
  numCount = 1;
}

function getexpressioNDot (value){
  if(dotCount === 0){
    expressioN[index].push(value);                    //section to check for decimal numbers
    output.value = expressioN[index].join("");
    ;
    dotCount++;
  }
}



function operator (value){
  if(operatorCount === 1){                                       //section to check if operator is inputted and prevents operator being inputted twice
    if(expressioN[index].length !== undefined){
      expressioN[index] = parseFloat(expressioN[index].join(""));
      
    }
    index++;
    
    expressioN[index] = [];                  //empties expressioN array to be able to add a new number
    expressioN[index].push(value);
    output.value = expressioN[index].join("");
    
    numCount = 0;
    dotCount = 0;
    operatorCount = 0;
    outputOperations.value = expressioN.join("");
  }
}


function calculate (){
  if(/[0-9]/.test(expressioN[index][0]) && index > 0){
    if(expressioN[index].length > 1){
      expressioN[index] = parseFloat(expressioN[index].join(""));
    } else {
      expressioN[index] = parseFloat(expressioN[index]);
    }
    result = eval(expressioN.join(""));              //evaluates expression entered by the user
    result = Math.round(result*100)/100;             //makes sure result doesn't exceed 2 floating points
    output.value = result;
    
    expressioN = [result];               //keeps current result in expressioN
    index = 0;
    countCE = 0;
    operatorCount = 1;
    outputOperations.value = expressioN.join("");
  }

}



// Empty numArray and operator array, to start new
function ac(){
  expressioN = [[]];
  result = [];
  index = 0;
  operatorCount = 0;
  output.value = 0;
  outputOperations.value = expressioN.join("");
}




//User-interface logic
$(document).ready(function() {
   $("button#calculator").click(function(){
     $("button#calculator").hide();
     $("a#converter").hide();
     $(".calculator").show();
     $("body").addClass(".calc");
     $("html").addClass(".calc");
   })

 
});
   //Section for keyboard input
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
      case ".":
      getexpressioNDot(".");
      break;
      case ",":
      getexpressioNDot(".");
      break;
      case "Enter":
      calculate();
      break;
      case "=":
      calculate();
      break;
      case "Backspace":
      ce();
      break;
      case "Escape":
      ac();
      break;
      default:
      return; 
    }
    event.preventDefault();
  }, true);

  