function addFirst() {
    var list = document.getElementById('list');
    var newFirstItem = document.createElement('li');
    var newFirstText = document.createTextNode('Нулевой элемент');
    newFirstItem.appendChild(newFirstText);
    newFirstItem.setAttribute('class','list__item');
    list.insertBefore(newFirstItem,list.firstChild);
    listNum();
};

function remFirst() {
    var list = document.getElementById('list');
    var firstItem = list.firstChild;
    list.removeChild(firstItem);
    listNum();
};

function addLast() {
    var list = document.getElementById('list');
    var newItemLast = document.createElement('li');
    var newItemText = document.createTextNode('Пятый элемент');
    newItemLast.appendChild(newItemText);
    newItemLast.setAttribute('class','list__item');
    list.appendChild(newItemLast);
    listNum();
};

function remLast() {
    var list = document.getElementById('list');
    var lastItem = list.lastChild;
    list.removeChild(lastItem);
    listNum();
};


function bgGr() {
    var listItems = document.getElementsByClassName('list__item');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].setAttribute('class','list__item list__item-green');
    }
};

function bgOr() {
    var listItems = document.getElementsByClassName('list__item');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].setAttribute('class','list__item list__item-orange');
    }
};

function listNum() {
    var listItems = document.getElementsByClassName('list__item');
    var textOutput = document.getElementById('listNum');
    textOutput.textContent = listItems.length;
};