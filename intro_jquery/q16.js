$(document).ready(function(){
    var root = 'https://jsonplaceholder.typicode.com';

    $.ajax({
      url: root + '/posts/1',
      method: 'GET'
    }).then(function(data) {
      alert(JSON.stringify(data));
      console.log(data);
    });
});
