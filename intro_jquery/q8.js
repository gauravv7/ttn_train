$(document).ready(function(){
    $('a').last().click(function appendNext(e) {
        e.stopPropagation();
        console.log($(this));
        console.log('here');
        $(this).clone().appendTo($(this).parent()).on('click', function(){
            alert('working now');
        });
    });
});
