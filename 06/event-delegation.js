function getTarget(e) {
    if(!e) {
        e = window.Event;
    } else {
        return e.target || e.srcElement;
    }
    console.log(e);
};

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function(e){
        itemDone(e);
    });
};

function itemDone(e) {
    var target, elParent;
    target = getTarget(e);
    console.log(target);
    elParent = target.parentNode;
    console.log(elParent);
    elParent.removeChild(target);

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};