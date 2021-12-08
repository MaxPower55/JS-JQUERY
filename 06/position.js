var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(event) {
    sx.textContent = event.screenX;
    sy.textContent = event.screenY;
    px.textContent = event.pageX;
    py.textContent = event.pageY;
    cx.textContent = event.clientX;
    cy.textContent = event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove',showPosition,false);



var key = document.getElementById('text');
key.addEventListener('keypress',showkey,false);

function showkey(e) {
    var show = document.getElementById('pass');
    var showKey = String.fromCharCode(e.keycode);
    show.textContent = showKey;
}