var hotel = {
    name:'Tula',
    rooms:40,
    booked:25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

var hotel2 = {
    name:'Paris',
    rooms:75,
    booked:17,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName2');
elName.textContent = hotel2.name;

var elRooms = document.getElementById('rooms2');
elRooms.textContent = hotel2.checkAvailability();
