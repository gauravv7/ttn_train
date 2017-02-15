// Area of Circle.
(function(){
  console.log('starting Area of circle')
  var radius     = parseFloat(prompt('Enter radius', 0)).toFixed(2);
  var area       = ((3.14*radius*radius)).toFixed(2);
  alert("area of circle is: " + area);
}());
