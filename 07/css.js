let listAction = document.getElementById('listAction');
listAction.addEventListener('click', action, false);

function action() {
    var bgColor = $('li#two').css('background-color');
    $('ul').append('<li>Цвет второго элемента ' + bgColor + '</li>');
    $('li').css('background-color','yellow');
};