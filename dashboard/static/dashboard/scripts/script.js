//Кнопки в разделе о инструкции
let i_buttons = document.getElementsByClassName('sovets-buttons-button');
let i_current_button = 0;


changed();

function changed(){
    i_change();
    setTimeout(()=> f_change(), 1)
}


i_buttons[0].addEventListener('click',()=>{
    i_current_button = 0;
    i_change();
})

i_buttons[1].addEventListener('click',()=>{
    i_current_button = 1;
    i_change();
})

i_buttons[2].addEventListener('click',()=>{
    i_current_button = 2;
    i_change();
})

i_buttons[3].addEventListener('click',()=>{
    i_current_button = 3;
    i_change();
})

function i_change(){
    for(i=0;i<=3;i++){
        i_buttons[i].style.boxShadow = 'none';
        i_buttons[i].style.color = '#797A7E';
    }
    i_buttons[i_current_button].style.color = '#000';
    i_buttons[i_current_button].style.boxShadow = '0px 0px 30px 5px #F90';

    i_current_button === 1 ? i_children():null;
    i_current_button === 2 ? i_adult():null;
    i_current_button === 3 ? i_pet():null;
    i_current_button === 4 ? i_me():null;
    setTimeout(()=> chonge(), 1);
}

let i_div = document.getElementsByClassName('sovets-sovet-div');

function chonge(){
    Array.from(i_div).forEach(el => { // преобразуем HTMLCollection в массив и правильно используем forEach
        el.classList.add("flip");
        setTimeout(() => {
            el.classList.remove("flip");
        }, 300);
    });
}

//functions for instructions
let i_1_h3 = document.getElementsByClassName('sh3')[0];
let i_2_h3 = document.getElementsByClassName('sh3')[1];
let i_3_h3 = document.getElementsByClassName('sh3')[2];
let i_4_h3 = document.getElementsByClassName('sh3')[3];

let i_1_p = document.getElementsByClassName('hp')[0];
let i_2_p = document.getElementsByClassName('hp')[1];
let i_3_p = document.getElementsByClassName('hp')[2];
let i_4_p = document.getElementsByClassName('hp')[3];

function i_children(){

}

function i_adult(){

}

function i_pet(){

}

function i_me(){

}


//Input Form
let f_buttons = document.getElementsByClassName('anketa-main-btns-button');
let f_current_bnutton = 0;


f_buttons[0].addEventListener('click',()=>{
    f_current_bnutton = 0;
    f_change();
})

f_buttons[1].addEventListener('click',()=>{
    f_current_bnutton = 1;
    f_change();
})

f_buttons[2].addEventListener('click',()=>{
    f_current_bnutton = 2;
    f_change();
})

function f_change(){
    for(i=0;i<=2;i++){
        f_buttons[i].style.boxShadow = 'none';
        f_buttons[i].style.color = '#CFCFCF';
    }
    f_buttons[f_current_bnutton].style.boxShadow = '0px 0px 20px 1px rgba(255, 255, 255, 0.70)';
    f_buttons[f_current_bnutton].style.color = '#fff';
}