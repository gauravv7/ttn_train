$(document).ready(function(){
    var root = 'https://jsonplaceholder.typicode.com';

    $('button').click(function(e){
        $.ajax({
            url: root + '/posts/1',
            method: 'DELETE',
            success: function(){
                console.log($(e.target));
                $(e.target).parents('tr').remove();
            }
        })
    });
});
