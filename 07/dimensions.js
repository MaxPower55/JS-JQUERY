var dimensions = document.getElementById('dimensions');
dimensions.addEventListener('click', dim, false);


function dim() {
    var listHeight = $('#compDim').height();
    var listWidth = $('#compDim').width();
    $('p').remove();
    $('#dimensions').before('<p class="component__parag">Высота окна: ' + listHeight + 'px</p>');
    $('#dimensions').before('<p class="component__parag">Ширина окна: ' + listWidth + 'px</p>');
};