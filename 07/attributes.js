var list__butt = document.getElementById('list__butt');
list__butt.addEventListener('click', attr, false);

function attr() {
    $('li#three').removeClass('list__item-hot');
    $('li.list__item-hot').addClass('list__item-fav');
    $('ul').attr('id','group');
};