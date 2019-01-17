//business logic

   var index = 0,      //variable to help navigate through array
    numberOfOperators = 0,      //variable to keep track of operators to avoid user inserting two operators at once
    countNumbers = 1,                     //variable to keep track of the numbers passed to an operator    
    answer = 0,         //variable to store answer
    expressioN = [[]];        //variable to store input as array so they be turned into string to be compared with expressions
    output = document.getElementById("output"),                //variable to display number entered before operator
    decimalTracker=0;
   outputOperations = document.getElementById("outputOperations");     //variable to display number entered after operator

   
   function getExpressionDot (value){
  if(decimalTracker === 0){
    expressioN[index].push(value);                    //section to check for decimal numbers
    output.value = expressioN[index].join("");
    ;
    decimalTracker++;
  }
}

function operator (value){
  if(numberOfOperators === 1){                                       //section to check if operator is inputted and prevents operator being inputted twice
    if(expressioN[index].length !== undefined){
      expressioN[index] = parseFloat(expressioN[index].join(""));
      
    }
    index++;
    
    expressioN[index] = [];                  //empties expressioN array to be able to add a new number
    expressioN[index].push(value);
    output.value = expressioN[index].join("");
    
    countNumbers = 0;
    decimalTracker = 0;
    numberOfOperators = 0;
    outputOperations.value = expressioN.join("");
  }
}

function getExpression (value){
  if(countNumbers === 0) {
    index++;
    expressioN[index] = [];
  }
  expressioN[index].push(value);
  if(expressioN[index][0] === 0 && expressioN[index].length > 1 && expressioN[index][1] != "."){            //if user enters an number after zero,only that number is displayed
    
    output.value = expressioN[index][1];
  } else {
    output.value = expressioN[index].join("");                            //display all numbers
  }
  
  numberOfOperators = 1;
  countNumbers = 1;
}


function calculate (){
  if(/[0-9]/.test(expressioN[index][0]) && index > 0){
    if(expressioN[index].length > 1){
      expressioN[index] = parseFloat(expressioN[index].join(""));
    } else {
      expressioN[index] = parseFloat(expressioN[index]);
    }
    answer = eval(expressioN.join(""));              //evaluates expression entered by the user
    answer = Math.round(answer*100)/100;             //makes sure answer doesn't exceed 2 floating points
    output.value = answer;
    
    expressioN = [answer];               //keeps current answer in expressioN
    index = 0;
    countCE = 0;
    numberOfOperators = 1;
    outputOperations.value = expressioN.join("");
  }

}



function ac(){
  expressioN = [[]];
  answer = [];
  index = 0;                        //section to empty array when user click ac
  numberOfOperators = 0;
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
   $("li#about").click(function(){
     ("#about1").show();
   })

 
});
  
   window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; 
    }
    switch (event.key) {
      case "0":
      getExpression(0);
      break;                                            
      case "1":
      getExpression(1);
      break;
      case "2":
      getExpression(2);
      break;
      case "3":
      getExpression(3);
      break;
      case "4":
      getExpression(4);
      break;
      case "5":                                                 //section for key input
      getExpression(5);
      break;
      case "6":
      getExpression(6);
      break;
      case "7":
      getExpression(7);
      break;
      case "8":
      getExpression(8);
      break;
      case "9":
      getExpression(9);
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
      getExpressionDot(".");
      break;
      case ",":
      getExpressionDot(".");
      break;
      case "Enter":
      calculate();
      break;
      case "=":
      calculate();
      break;
      case "Escape":
      ac();
      break;
      default:
      return; 
    }
    event.preventDefault();
  }, true);

  