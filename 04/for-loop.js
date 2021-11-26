var scores = [24,57,91];
var arrayLenght = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for (i = 0; i < arrayLenght; i++) {
    roundNumber = (i + 1);
    msg += 'Round ' + roundNumber + ' : ';
    msg += scores[i] + '<br/>';
}

document.getElementById('output').innerHTML = msg;