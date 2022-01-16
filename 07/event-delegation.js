$(function() {
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'},
        function(e) {
            $('ul span').remove();
            listItem = 'Элемент: ' + e.target.textContent + '</br>';
            itemStatus = 'Состояние: ' + e.data.status + '</br>';
            eventType = 'Событие: ' + e.type;
            $('ul').append('<span>' + listItem + itemStatus + eventType + '</span>');
        }
    );
});