var textInput = document.getElementById('text');
// textInput.onblur = textTip;
// textInput.onmouseover = textTip;

textInput.addEventListener('keypress',textTip,false);
// textInput.addEventListener('blur',textTip,false);
// textInput.addEventListener('mouseover',textTip,false);

function textTip() {
    var textLength = textInput.value.length;
    if (textLength <= 5) {
        var textLabel = document.getElementById('text__label');
        textLabel.className = 'text__label';
        textLabel.textContent = 'Вы ввели ' + textLength + ' символов.'
    } else {
        var textLabel = document.getElementById('text__label');
        textLabel.className = 'text__label text__label-hide';
    }
};