// What’s the result of executing this code and why?

function test() {
  console.log(a);
  console.log(fun());

  var a = 1;
  function fun() {
    return 2;
  }
}

test();

output is:
2
undefined
/*
  because, on line 4 when variable 'a' is encountered at the first time, there is no hoisting of 'a' before in the surrounding scope,
  however a proper initialization will be needed to avoid the undefined output even if the variable is declared before its hit in the code.
  2 is returned by the fun() call, so that is very obvious.
*/
