// Prompt for amount, interest rate and no. of years and calculate simple interest.
(function(){
  console.log('starting Prompt for amount, interest rate and no. of years and calculate simple interest.')
  var amount          = parseFloat(prompt('Enter amount', 0)).toFixed(2);
  var rate            = parseFloat(prompt('Enter interest rate', 0)).toFixed(2);
  var time            = parseFloat(prompt('Enter no. of years', 0)).toFixed(2);
  var simpleInterest  = ((amount * rate * time)/100).toFixed(2);
  alert("simple interest is: " + simpleInterest); 
}());
