var hotel = new Object();
hotel.name = 'Tulula';
hotel.rooms = 40;
hotel.booked = 18;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};
