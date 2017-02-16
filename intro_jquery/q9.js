$(document).ready(function(){
    $('select').on('change', function(){
        $('div > p').text($(this).val());
    });
});
