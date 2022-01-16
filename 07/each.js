var eachButton = document.getElementById('eachButton');
eachButton.addEventListener('click', each, false);

function each() {
    $('li').each(function() {
    var ids = this.id;
    $(this).append('<em> ' + ids + ' </em>');
    });
};