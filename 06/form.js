var formSignup = document.getElementById('formSignup');
formSignup.addEventListener('click',checkTerms,false);

function checkTerms(e) {
    var checkbox = document.getElementById('checkbox');
    var checkboxTip = document.getElementById('checkbox__tip');
    if (!checkbox.checked) {
        checkboxTip.textContent = 'Нужно принять соглашение';
    } else {
        checkboxTip.textContent = ' ';
    }
};

var selectPackage = document.getElementById('selectPackage');
selectPackage.addEventListener('change',packageHint,false);

function packageHint() {
    var choose__tip = document.getElementById('choose__tip');
    var package = this.options[this.selectedIndex].value;
    if (package == '1 год') {
        choose__tip.textContent = 'Отличный выбор';
    } else {
        choose__tip.textContent = 'Выберите другое';
    }
};