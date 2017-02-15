/*
create a list of objects of Employee with info as follow :

Name, age, salary ,DOB

filter all employees with salary greater than 5000

group employee on the basis of their age

fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
*/

(function(){
    console.log('starting Employee program.');
    var groupByAge = function(list, age){
      var items = [];
      for(obj in list){
        if(list[obj].age == age){
          items.push(list[obj]);
        }
      }
      return items;
    };
    var grouping = function(list){
      var groups = [];
      var obj = {};
      for(item in list){
        var key = "_"+list[item].age;
        if(!(key in obj)){
          obj[key] = groupByAge(list, list[item].age);
        }
      }
      groups.push(obj);
      console.log("grouping by age");
      console.log(JSON.stringify(groups));
      return groups;
    }

    var filterBySalary = function(list, baseAmount){
      var groups = [];
      for(item in list){
        if(list[item].salary > baseAmount){
          groups.push(list[item]);
        }
      }
      console.log("filtered by salary");
      console.log(JSON.stringify(groups));
      return groups;
    }

    var filterBySalaryRange = function(list, min, max){
      var groups = [];
      for(item in list){
        if(list[item].salary > min && list[item].salary < max){
          groups.push(list[item]);
        }
      }
      console.log("filtered by salary range: min: "+min+",  max: "+max);
      console.log(JSON.stringify(groups));
    }

    var incrementSalary = function(list, incrementationValue){
      for(item in list){
        list[item].salary*=incrementationValue;
      }
      console.log("incrementing salary 5 times");
      console.log(JSON.stringify(list));
      return list;
    }

    var employees = [
        {
          name: "abc",
          age: 21,
          salary: 23000,
          dob:  new Date(1992, 3, 4)
        },
        {
          name: "xyz",
          age: 21,
          salary: 500,
          dob:  new Date(1992, 1, 2)
        }
    ];

    var ageGroups = grouping(employees);
    var groups = filterBySalaryRange(employees, 20, 1000);
    groups = incrementSalary(groups, 5);
}());
