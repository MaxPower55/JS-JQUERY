$(function() {
    $('li').on('focus click mousemove', function(event) {
        $('li span').remove();
        var date = new Date();
        date.setTime(event.timeStamp);
        var clicked = date.toLocaleTimeString();
        $(this).append('<span> ' + clicked + ' ' + '</span>');
    });
});