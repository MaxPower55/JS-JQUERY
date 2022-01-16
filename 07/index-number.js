// var indexNumb = document.getElementById('index-number');
// indexNumb.addEventListener('click', indexNumber, false);

$(function() {
    $('li:lt(1)').removeClass('list__item-hot');
    $('li').eq(1).addClass('list__item-fav');
    $('li:gt(2)').addClass('list__item-fav');
});