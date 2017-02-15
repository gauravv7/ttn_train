// Copy information of one object to another and log it to console.
(function(){
  console.log('starting copy information of one object to another and log it to console')
  var obj1 = {x: 3, y: "abc"};
  var obj2 = Object.create(null);
  console.log("source object before coping is below");
  console.log(obj1);
  console.log("target object before coping is below");
  console.log(obj2);
  for(key in obj1){
    obj2[key] = obj1[key];
  }
  console.log("source object after coping is below");
  console.log(obj1);
  console.log("target object after coping is below");
  console.log(obj2);
}());
