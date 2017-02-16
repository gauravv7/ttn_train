$(document).ready(function(){
    $('a').last().click(function appendNext(e) {
        e.stopPropagation();
        console.log($(this));
        console.log('here');
        $(this).clone().appendTo($(this).parent());
    });
});
