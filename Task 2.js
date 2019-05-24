var paragraph = "1a Lorem Ipsum is simply dummy text of the printing and typesetting industry."+
"To offer protection against timing attacks and fingerprinting, the precision of "+
"performance now might get rounded depending on browser settings."+
"In Firefox, the privacy.reduceTimerPrecision  preference is enabled "+
"by default and defaults to ms.";


var lstFrequency = {};

function frequencyDistribution(text){
  for(var index=0;index<text.length;index++){
    if(text[index] !== " "){
      lstFrequency[text[index]] = lstFrequency[text[index]]? lstFrequency[text[index]] +1 : 1;
    }
  }
}

function printFrequencies(){
  console.log(Object.entries(lstFrequency));
}

console.time("answer time");
console.timeLog("answer time");
frequencyDistribution(paragraph);
printFrequencies();
console.timeEnd("answer time");

