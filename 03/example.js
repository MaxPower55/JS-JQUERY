function a() {

    var hotel = {
        name: 'Отель Пляж',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.roomRate * ((100-this.discount) / 100);
            return offerRate;
        }
    };

    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    hotelName.textContent = hotel.name;
    roomRate.textContent = hotel.roomRate.toFixed(2) + ' Rub';
    specialRate.textContent = hotel.offerPrice() + ' Rub';

    var expiryMsg, today, elEnds;
    
    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        dayNames = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
        monthNames = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();


        expiryMsg = 'Акция завершается в ';
        expiryMsg += day + ' ( ' + date + ' ' + month + ' ' + year + ' ) ';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
};