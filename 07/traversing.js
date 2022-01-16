$(function() {

var $h3 = $('h3');
$('ul').hide();

$h3.on('click', function() {
    $h3.next()
        .fadeIn(500)
        .children('.hot')
        .addClass('complete');
    $h3.find('a').fadeOut();
    });
});