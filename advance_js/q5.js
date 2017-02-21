// callback inside a callback
/*
  a common case of logging api used in JS, to be passed into success or failure callbacks, kept as a separate modular code
*/
(function(){

  function callbackSuccess(){
    //some work;
    alert("yey!");
  }

  function callbackFailure(){
    // some work
    alert('Shit');
  }
  function loggingApi(e){
    console.log(e || "no message for loggingApi");
  }

  (function someFunc(a, b, callbackSuccess, callbackFailure, loggingApi){
    try{
      a=b;
      callbackSuccess(loggingApi("logging for success now"));
    } catch(e){
      callbackFailure(loggingApi());
    }
  })(1,2, callbackSuccess, callbackFailure, loggingApi);
})();
