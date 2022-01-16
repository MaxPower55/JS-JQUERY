$(function() {
    var $list, $newItemForm, $newItemButton;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');
    $('li').hide().each(function(index) {
        $(this).delay(450 * index).fadeIn(500);
    });
});

function updateCount() {
    var items = $('li[class!=complete]').lenght;
    $('#counter').text(items);    
}