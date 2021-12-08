var elList = document.getElementById('mutationUl');
var addLink = document.getElementById('mutationButton');
var counter = document.getElementById('itemCount');

function addItem(e) {
    e.preventDefault();
    var newEl = document.createElement('li');
    var newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    var listcount = elList.getElementsByTagName('li').length;
    counter.textContent = listcount;    
}

elList.addEventListener('DOMNodeInserted',updateCount,false);
addLink.addEventListener('click',addItem,false);