(function(){
  // arguments.callee
  // ===========================
  // Reference to the currently executing function.
  //
  // This has numerous benefits:
  //
  // the function can be called like any other from inside your code
  // it does not create a variable in the outer scope (except for IE 8 and below)
  // it has better performance than accessing the arguments object

  var global = this;

  var sillyFunction = function(recursed) {
      if (!recursed) { return arguments.callee(true); }
      if (this !== global) {
          alert('arguments.caller: This is: ' + this);
      } else {
          alert('arguments.caller: This is the global');
      }
  }

  sillyFunction();

  // arguments.caller
  // ===========================
  // DEPRECATED
  // Reference to the function that invoked the currently executing function.
  var global = this;

  var sillyFunction = function(recursed) {
      if (!recursed) { return arguments.callee(true); }
      if (this !== global) {
          alert('arguments.callee: This is: ' + this);
      } else {
          alert('arguments.callee: This is the global');
      }
  }

  sillyFunction();

  // arguments.length
  // Reference to the number of arguments passed to the function.
  function adder(base /*, n2, ... */) {
    base = Number(base);
    for (var i = 1; i < arguments.length; i++) {
      base += Number(arguments[i]);
    }
    return base;
  }
  var retVal = adder(10, 1,2,3,4,54,5);
  console.log(retVal);
  alert("arguments.length: "+retVal);

})();
