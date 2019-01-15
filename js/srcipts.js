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
