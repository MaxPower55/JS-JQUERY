function checkLength(event, minLength) {
    var el, elMsg;
    if (!event) {
        event = window.event;
        }
    el = event.target || event.srcElement;
    elMsg = document.getElementById('text__label');
    
    if (el.value.length < minLength) {
        elMsg.textContent = 'Name must be contained not much';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('text');
if (elUsername.addEventListener) {
    elUsername.addEventListener('mouseover', function(event){checkLength(event,5);}, false);
    } else {
    elUsername.attachEvent('onmouseover', function(event) {checkLength(event,5);});
}

