// Return highest occurred character in a String. For example if input is "aaaaaaaaaaaaaaaaabbbbcddddeeeeee" it should return "a".
(function(){

  var counter = {};
  var testString = "aaaaaaaaaaaaaaaaabbbbcddddeeeeee";
  for(var i =0 ; i<testString.length; i++){
    if(testString[i] in counter){
      counter[testString[i]]++;
    } else{
      counter[testString[i]]=0;
    }
  }
  
  var max = 0;
  var k;
  for(key in counter){
    if(max<counter[key]){
      max = counter[key];
      k = key;
    }
  }
  // below the max value with key associated with it
  console.log(k + ":"+max);
})();
