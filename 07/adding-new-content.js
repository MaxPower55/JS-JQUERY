function newItem() {
    $('ul').after('<p class="notice">Список обновлен!</p>');
    $('li.hot').append(' + ');
    var $newListItem = $('<li><em>кукуруза</em> без ГМО</li>');
    $('li:last').after($newListItem);
};