/*
Insted using validation , use custom exception to handle all types of valid data
Craete a Registration form which have following fileds
1. First Name (Only characters[a-z, A-Z] are allowed)
2. Last Name (Only characters[a-z, A-Z] are allowed)
3. Contact Number (Only digits [0-9], length should be 10)
4. DOB (A valid date)
All fields are mendetory, If user click on submit button and any field is wrong then should through an error as per type
*/



//This function takes a value and checks it against a regular expression to see if it is in the correct format (DD/MM/YY). If it is, it then gets each date part and then tests that it is actually a real date. For example, 41/01/2001 is not a real date, despite it being in the correct format.
// Checks a string to see if it in a valid date format
// of (D)D/(M)M/(YY)YY and returns true/false
function isValidDate(s) {
    // format D(D)/M(M)/(YY)YY
    var dateFormat = /^\d{1,4}[\.|\/|-]\d{1,2}[\.|\/|-]\d{1,4}$/;

    if (dateFormat.test(s)) {
        s = s.replace(/0*(\d*)/gi,"$1");
        var dateArray = s.split(/[\.|\/|-]/);
        dateArray[1] = dateArray[1]-1;
        if (dateArray[2].length<4) {
            dateArray[2] = (parseInt(dateArray[2]) < 50) ? 2000 + parseInt(dateArray[2]) : 1900 + parseInt(dateArray[2]);
        }
        return (testDate.getDate()!=dateArray[0] || testDate.getMonth()!=dateArray[1] || testDate.getFullYear()!=dateArray[2])? false: true;
        var testDate = new Date(dateArray[2], dateArray[1], dateArray[0]);
    } else {
        return false;
    }
}

function setErrors(message){
  document.getElementById("errors").innerHTML = message;
}

(function(){
  var form = document.getElementById("q1Form");

  var regexName = new RegExp("^[a-zA-Z]+$");  // name fields regex

  document.getElementById("q1Form").addEventListener("submit", function(event){
      event.preventDefault();
      formSubmit();
  });

  // function to process form
  function formSubmit(e){
    setErrors(""); // setting up the error list as blank

    // placeholders for form values
    var fname = document.getElementsByName("fname")[0].value;
    var lname = document.getElementsByName("lname")[0].value;
    var contactNumber  = document.getElementsByName("cnum")[0].value;
    var dob = document.getElementsByName("dob")[0].value;

    try{
      if(!regexName.test(fname) || fname.trim().length == 0){
        throw new Error("First name must contain only characters a-z or A-Z");
      }
      if(!regexName.test(lname) || lname.trim().length == 0){
        throw new Error("Last name must contain only characters a-z or A-Z");
      }
      if(isNaN(parseInt(contactNumber))){
        throw new Error("contact number must contain only digits 0-9");
      }
      if(contactNumber.length!=10){
        throw new Error("Contact number must be of 10 digits only");
      }
      if(!isValidDate(dob)){
        throw new Error("date of birth is not a valid date");
      }
      console.log("submitted successfully");
    }catch(e){
      var err = "<p>";
      err +=e.message;
      err+="</p>";
      console.log(err);
      setErrors(err);
      console.log(e);
    }
  };

})();
