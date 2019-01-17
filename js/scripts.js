$(document).ready(function(event) {
  $("button#calculator").click(function(){
    $("button#calculator").hide();
    $("a#converter").hide();
    $(".calculator").show();
    $("body").addClass(".calc");
    $("html").addClass(".calc");
  })

  $("a#converter").click(function(){
   $("button#calculator").hide();
   $("a#converter").hide();
   $(".converter").show();
   $("body").addClass(".conv");
   $("html").addClass(".conv");
  })
  event.preventDefault();
});

function converter(source,valNum) {
  valNum = parseFloat(valNum);
  
  if (source=="inputPounds") {
    inputKilograms.value=(valNum/2.2046).toFixed(4);
    inputOunces.value=(valNum*16).toFixed(4);
    inputGrams.value=(valNum/0.0022046).toFixed(4);
    inputStones.value=(valNum*0.071429).toFixed(4);
  }
  if (source=="inputKilograms") {
    inputPounds.value=(valNum*2.2046).toFixed(4);
    inputOunces.value=(valNum*35.274).toFixed(4);
    inputGrams.value=(valNum*1000).toFixed(4);
    inputStones.value=(valNum*0.1574).toFixed(4);
  }
  if (source=="inputOunces") {
    inputPounds.value=(valNum*0.062500).toFixed(4);
    inputKilograms.value=(valNum/35.274).toFixed(4);
    inputGrams.value=(valNum/0.035274).toFixed(4);
    inputStones.value=(valNum*0.0044643).toFixed(4);
  }
  if (source=="inputGrams") {
    inputPounds.value=(valNum*0.0022046).toFixed(4);
    inputKilograms.value=(valNum/1000).toFixed(4);
    inputOunces.value=(valNum*0.035274).toFixed(3);
    inputStones.value=(valNum*0.00015747).toFixed(5);
  }
  if (source=="inputStones") {
    inputPounds.value=(valNum*14).toFixed(4);
    inputKilograms.value=(valNum/0.15747).toFixed(4);
    inputOunces.value=(valNum*224).toFixed(4);
    inputGrams.value=(valNum/0.00015747).toFixed(4);
  }

}