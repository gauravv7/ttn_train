var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function() {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    }());
  }
};
myObject.func();

//output
outer func: this.foo = bar  // because, 'this' keyword is following the scope of the object in which the function is declared and has the 'foo' variable declared
outer func: self.foo = bar // because, self is an alias to 'this' keyword which is following the scope of the object in which the function is declared and has the 'foo' variable declared
inner func: this.foo = undefined  // because, 'this' keyword is following the scope of the function of IIFE expression, where there is no 'bar' variable hoisted
inner func: self.foo = bar  // self is defined a level up from the calling function scope, and it has 'foo' variable defined there.
