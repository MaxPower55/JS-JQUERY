var filtr = document.getElementById('filtr');
filtr.addEventListener('click', filters, false);

var $listItems = $('li');

function filters() {
    $listItems.filter('.list__item-hot:last').removeClass('list__item-hot');
};

$listItems.each(function() {
    var $this = $(this);
    if ($this.is('.list__item-hot')) {
        $this.prepend('Акция');
    }
});