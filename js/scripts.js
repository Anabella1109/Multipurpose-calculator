$(document).ready(function(event) {
  $("button#calculator").click(function(){
    $("button#calculator").hide();
    $("a#converter").hide();
    $(".calculator").show();
    // $("body").addClass(".calc");
    // $("html").addClass(".calc");
  })

  $("a#converter").click(function(){
   $("button#calculator").hide();
   $("a#converter").hide();
   $(".converter").show();
  //  $("body").addClass(".conv");
  //  $("html").addClass(".conv");
  })
  event.preventDefault();
});

function converter(source,inputValue) {
  inputValue = parseFloat(inputValue);
  
  if (source=="inputPounds") {
    inputtedKilograms.value=(inputValue/2.2046).toFixed(4);
    inputtedOunces.value=(inputValue*16).toFixed(4);
    inputtedGrams.value=(inputValue/0.0022046).toFixed(4);
    inputtedStones.value=(inputValue*0.071429).toFixed(4);
  }
  if (source=="inputtedKilograms") {
    inputPounds.value=(inputValue*2.2046).toFixed(4);
    inputtedOunces.value=(inputValue*35.274).toFixed(4);
    inputtedGrams.value=(inputValue*1000).toFixed(4);
    inputtedStones.value=(inputValue*0.1574).toFixed(4);
  }
  if (source=="inputtedOunces") {
    inputPounds.value=(inputValue*0.062500).toFixed(4);
    inputtedKilograms.value=(inputValue/35.274).toFixed(4);
    inputtedGrams.value=(inputValue/0.035274).toFixed(4);
    inputtedStones.value=(inputValue*0.0044643).toFixed(4);
  }
  if (source=="inputtedGrams") {
    inputPounds.value=(inputValue*0.0022046).toFixed(4);
    inputtedKilograms.value=(inputValue/1000).toFixed(4);
    inputtedOunces.value=(inputValue*0.035274).toFixed(3);
    inputtedStones.value=(inputValue*0.00015747).toFixed(5);
  }
  if (source=="inputtedStones") {
    inputPounds.value=(inputValue*14).toFixed(4);
    inputtedKilograms.value=(inputValue/0.15747).toFixed(4);
    inputtedOunces.value=(inputValue*224).toFixed(4);
    inputtedGrams.value=(inputValue/0.00015747).toFixed(4);
  }

}