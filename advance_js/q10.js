// Write a program to remove duplicate characters from String. For example, if the input is ‘bananas’ the output will be ‘bans’.
(function(){
  function checkNextDuplicate(str, chr, start){
    return str.indexOf(chr, start);
  }
  function removeNextDuplicate(str, chr, start){
    var pos=0;
    if(( pos = checkNextDuplicate(str, chr, start)) !=-1){
      str.substr()
    }
  }
  var counter = {}; // mapping of first occurence of the char with value as their pos
  var testString = "bananas";

  for(var i = 0; i<testString.length; i++){
    if(testString[i] in counter){
      continue;
    } else {
      counter[testString[i]] = i;
    }
  }

  var result = Object.keys(counter).join("");
  console.log(result);
})();
