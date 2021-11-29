function addEl() {
    var newEl = document.createElement('div');
    newEl.className = 'item item-medium';
    var newText = document.createTextNode('Зернистый творог');
    newEl.appendChild(newText);
    var position = document.getElementById('wrapper');
    position.appendChild(newEl);
}

function remEl() {
    var container = document.getElementById('wrapper');
    var delEl = container.lastChild;
    container.removeChild(delEl);
}