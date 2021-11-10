var today = new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var outputDate;

if (hourNow > 18) {
    outputDate = "Вечер";
} else if (hourNow > 12) {
    outputDate = "День";
} else if (hourNow > 0) {
    outputDate = "Ночь";
} else {
    outputDate = "Утро";
}

document.write('<h3>' + outputDate + '</h3');
document.write('<h2>' + hourNow + ':' + minuteNow + '</h2');
