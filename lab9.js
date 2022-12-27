function clickMe(button){
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}
function clickMe1(button){
    if(button.innerHTML == 'Семён')
        button.innerHTML = 'Калачёв';
    else
        button.innerHTML = 'Семён';
}
function clickMe2(button){
    if( button.innerHTML == 'Нажми меня'){
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'Yellow';
    }
    else if( button.innerHTML == 'Ещё раз нажми'){
        button.innerHTML = 'Ещё';
        button.style.color = 'Lime';}
    else if( button.innerHTML == 'Ещё'){
        button.innerHTML = 'Начать сначала';
        button.style.color = 'Aqua';}
    else if( button.innerHTML == 'Начать сначала'){
        button.innerHTML = 'Нажми меня';
        button.style.color = 'Red';}
    else
        button.innerHTML = 'Нажми меня';
}
