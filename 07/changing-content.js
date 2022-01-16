$(function () {
    $('li:contains("элемент")').text('илимент');
    $('li.hot').html(function() {
        return '<em>' +$(this).text() + '</em>';
    });
    $('li#one').remove();    
});