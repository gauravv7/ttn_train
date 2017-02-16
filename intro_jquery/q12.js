$(document).ready(function(){
    // be sure to click on the border for better outlook
    $('div').click(function(){
        alert($(this).prop('tagName')+" is clicked");
    });
    $('ul').click(function(e){
         e.stopPropagation();
    });
    $('ul li').click(function(e){
         e.stopPropagation();
    });
});
