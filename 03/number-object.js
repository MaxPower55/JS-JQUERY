var origNumber = 10.23456;

var msg = '<h2>исходное число </h2><p>' + origNumber + '</p>';
msg += '<h2>3 десят.разряда </h2><p>' + origNumber.toFixed(3) + '</p>';
msg += '<h2>3 цифры </h2><p>' + origNumber.toPrecision(3) + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;