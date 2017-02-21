// Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
(function(){
  var ary = [1, 2, 3];

  (ary).forEach(function(val, index){

    setTimeout(function(){
      console.log(val);
    }, index * 1000);
  });

})();
