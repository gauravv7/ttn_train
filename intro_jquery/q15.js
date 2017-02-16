$('td').each(function(e){
    var x = parseInt($(this).text());
    if(x>10){
        $(this).css('background-color', 'red');
    }
});
