// Q1. Create a hierarchy of person, employee and developers.
(function(){
  var Person = function (type){
  	this.type = type || "person";
  }
  console.log(new Person());
  var Employee = function(company, dept){
  	Person.call(this, "employee");
    this.company = company;
    this.dept = dept;
  }
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  console.log(new Employee("abc", "xyz"));

  var Developer = function(company, dept, tech, project){
  	Person.call(this, "employee");
    Employee.call(this, company, dept)
    this.tech = tech;
    this.project = project;
  }
  Developer.prototype = Object.create(Employee.prototype);
  Developer.prototype.constructor = Developer;
  console.log(new Developer("Company1", "Dept1", "tech1", "proj1"));


})();
