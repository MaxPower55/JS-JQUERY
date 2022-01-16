$(function () {
    var $newItemButton = $('#showForm');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(event) {
        event.preventDefault();
        var newText = $('#itemDescr').val();
        $('li:last').after('<li>' + newText + '</li>');
        $('li:last').addClass('list__item');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });
});