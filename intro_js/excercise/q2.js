// check if string is a palindrom.
(function(){
  console.log('starting palindrom check')
  var testString = prompt("Enter a string to check for palindrom");
  var index = 0;

  while(index <= testString.length/2){
    if(testString[index] != testString[(testString.length-1)-index]){
      console.log("not a palindrom");
      alert("not a palidrom");
      throw new Error("not a palindrom");
    }
    index++;
  }
  console.log("palindrom it is");
  alert("string is a palindrom");
}());
