var hotel = {
    name: "fdfd",
    rooms: 24,
    booked: 5,
    gym: true,
    pool: false,
};

var width = 600;
var shape = {width: 300};
var showWidth = function() {
    document.write(this.width);
}
shape.getWidth = showWidth;
