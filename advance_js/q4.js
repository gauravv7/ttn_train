// Get data from google weather api using ajax hit and render the resultent data in table or list form
(function(){
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452',
    success: function(data){
      var tbl = "<table>";
      tbl+="<thead>";
        tbl+="<tr>";
          tbl+="<th>";
            tbl+="long_name"
          tbl+="</th>";
          tbl+="<th>";
            tbl+="short_name";
          tbl+="</th>";
          tbl+="<th>";
            tbl+="types";
          tbl+="</th>";
        tbl+="</tr>";
      tbl+="</thead>";

      for(var i = 0; i<data.results.length; i++){
        for(var j = 0; j<data.results[i].address_components.length; j++){
          tbl+="<tr>";
            tbl+="<td>";
              tbl+=data.results[i].address_components[j].long_name;
            tbl+="</td>";
            tbl+="<td>";
              tbl+=data.results[i].address_components[j].short_name;
            tbl+="</td>";
            tbl+="<td>";
              tbl+=data.results[i].address_components[j].types.join("");
            tbl+="</td>";
          tbl+="</tr>";
        }

      }
      tbl += "</table>";
      console.log(tbl);
      document.getElementById("main").innerHTML = tbl;
    }
  });
})();
