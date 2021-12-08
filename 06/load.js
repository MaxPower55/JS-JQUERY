function hide() {
    var el = document.getElementById('li1');
    el.className = 'text__label-hide';
}
function show() {
    var el = document.getElementById('li1');
    el.className = 'complete';
}

var el2 = document.getElementById('li2');
el2.addEventListener('mousemove',hide,false);
el2.addEventListener('mouseout',show,false);