function setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded',setup,false);

window.addEventListener('beforeunload',function(event) {
    var message = 'вы ввели данные, которые не будут сохранены';
    (event || window.event).returnValue = message;
    return message;
}, false);