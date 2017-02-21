/*
Capitalize first letter of each word.
Given string is:
String s = "here are a bunch of words";
Output should be:
Here Are A Bunch Of Words
*/
var s = "here are a bunch of words";

var x = s.split(" ");
x.forEach(function(data, idx, arr){
  if(data[0] >= 'a' && data[0] <= 'z'){
    arr[idx] = data[0].toUpperCase()+data.substr(1, data.length);
  }
});
console.log(x.join(" "));
