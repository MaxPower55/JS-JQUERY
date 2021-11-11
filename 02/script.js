// Объявляем переменные
var today = new Date; // Создаем объект данных с датой
var hourNow = today.getHours(); // Находим текущий час из объекта с датой
var calc; // Переменная для вывода приветствия

// Пишем условия выполнения кода
if (hourNow > 0) {
    calc = "Доброй ночи";
} else if (hourNow > 6) {
    calc = "Доброе утро";
} else if (hourNow > 12) {
    calc = "Добрый день";
} else if (hourNow > 18) {
    calc = "Добрый вечер";
}

// Выводим результат
var outputText = document.getElementById('output');
outputText.textContent = calc;


var price;
var quantity;
var total;
price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = total + '$';

var cont = 2;
