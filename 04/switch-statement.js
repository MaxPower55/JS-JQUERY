var msg;
var level = 'abc';

switch (level) {
    case 1:
        msg = 'case1';
        break;
    case 'abc':
        msg = 'case2';
        break;
    case 3:
        msg = 'case3';
        break;
    default:
        msg = "default";
        break;
}

var el = document.getElementById('output');
el.textContent = msg;