// Define variables
var memory = [[]];
    result = 0;
    memoryIndex = 0;
    dotCount = 0;      //variable to keep track of number of dots to avoid user using more than one dot
    operatorCount = 0;       //variable to keep track of operators to avoid user inserting two operators at once
    numCount = 1;            
    errorMessage = "Something went wrong.";
    output = document.getElementById("output");
    outputOperations = document.getElementById("outputOperations");
