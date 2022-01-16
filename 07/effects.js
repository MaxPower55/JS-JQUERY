$(function() {
    $('li').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index){
        $(this).delay(200 * index).slideToggle(200);
    });
    $li.on('click', function() {
        $(this).fadeOut(200);
    });
});