var pass = 50;
var score = 75;
var msg;

if (score >= pass) {
    msg = 'Congr!';
} else {
    msg = 'Repeat';
}

var el = document.getElementById('output');
el.textContent = msg;