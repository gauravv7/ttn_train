//Start a digital watch for 2 hours on your screen and after that print a successfull message on screen that our service has been completed
(function(){
  var h1 = document.getElementsByTagName('h1')[0],
      start = document.getElementById('start'),
      stop = document.getElementById('stop'),
      clear = document.getElementById('clear'),
      seconds = 0, minutes = 0, hours = 0,
      t;

  // trigger an alert when time specified is reached
  var alarmify = function(hrs, mins, sec){
      if(hours==hrs && minutes==mins && seconds == sec){
    		alert("reached");
    	}
  }

  function add(alarmify) {
      seconds++;
      if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
              minutes = 0;
              hours++;
          }
      }

      h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  		alarmify(0, 0, 10); // 10sec alarm
      timer(alarmify);
  }
  function timer(alarmify) {
      t = setTimeout(add, 1000, alarmify);
  }
  timer(alarmify);


  /* Start button */
  start.onclick = timer;

  /* Stop button */
  stop.onclick = function() {
      clearTimeout(t);
  }

  /* Clear button */
  clear.onclick = function() {
      h1.textContent = "00:00:00";
      seconds = 0; minutes = 0; hours = 0;
  }
})();
