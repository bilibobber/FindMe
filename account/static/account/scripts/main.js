let inputs = document.getElementsByClassName('windows-els-div-input-div-input');
let nam = false;
let mail = false;
let pass = false;
let err = '';

// Инпут ИМЯ
inputs[0].addEventListener('input', function() {
    if (inputs[0].value.length >= 1) {
        nam = true;
        err = '';
    } else {
        nam = false;
        err = 'Заполните все поля';
    }
    errr();
});

inputs[1].addEventListener('input', function() {
    if (inputs[1].value.length >= 1) {
        mail = true;
        err = '';
    } else {
        mail = false;
        err = 'Заполните все поля';
    }
    errr();
});

inputs[2].addEventListener('input', function() {
    if (inputs[2].value.length >= 1) {
        pass = true;
        err = '';
    } else {
        pass = false;
        err = 'Заполните все поля';
    }
    errr();
});

function errr() {
    document.getElementsByClassName('error')[0].textContent = err;
    if(nam === true && mail === true && pass === true){
        readdy();
    }else{
        document.getElementsByClassName('windows-els-div-input-div-button')[0].style.color = '#636467';
        document.getElementsByClassName('windows-els-div-input-div-button')[0].style.textShadow = 'none';
    }
}

function readdy(){
    document.getElementsByClassName('windows-els-div-input-div-button')[0].style.color = '#F90';
    document.getElementsByClassName('windows-els-div-input-div-button')[0].style.textShadow = '0px 0px 20px rgba(244, 158, 29, 0.70)';
}

