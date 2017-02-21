(function(){
  // The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is "A for array and C for comma."
  //
  // Pseudo syntax:
  // theFunction.apply(valueForThis, arrayOfArgs)
  // theFunction.call(valueForThis, arg1, arg2, ...)
  //
  // Sample code:

  function theFunction(name, profession) {
      console.log("My name is " + name + " and I am a " + profession + ".");
  }
  theFunction("John", "fireman");
  theFunction.apply(undefined, ["Susan", "school teacher"]);
  theFunction.call(undefined, "Claude", "mathematician");
  theFunction.call(undefined, ...["Matthew", "physicist"]); // used with the spread operator

  // Output:

  // My name is John and I am a fireman.
  // My name is Susan and I am a school teacher.
  // My name is Claude and I am a mathematician.
  // My name is Matthew and I am a physicist.
})();
