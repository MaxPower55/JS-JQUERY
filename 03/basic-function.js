var msg = 'dhfjkdhjjfkdshfjdhjfhsfjdshj';
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}

function sayHello() {
    alert('Hello!');
}

function getArea(width, height) {
    return width * height;
}

// Получение с помощью функции одного значения

function calcArea(width, height) {
    var area = width * height;
    return area;
}

var wall1 = calcArea(3,5);
var wall2 = calcArea(8,5);

// Получение с помощью функции нескольких значений в массиве

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var area1 = getSize(3,2,3);
var area2 = getSize(3,3,2);

// Немедленно вызываемые функции-выражения
var area = (function() {
    var width = 3;
    var height = 4.5;
    return width * height;
}());

//Что такое объект
var hotel = {
    name:'Tula',
    rooms:40,
    booked: 25,
    gym:true,
    roomTypes:['twin','double','suite'],
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

