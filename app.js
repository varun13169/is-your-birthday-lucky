let luckyDobForm = document.querySelector('#lucky-dob-form');
let birthdateInp = document.querySelector('#inp-birthdate');
let luckyNumInp = document.querySelector('#inp-lucky-num');
let verdictlabel = document.querySelector('#verdict-label');
let verdictImg = document.querySelector('.verdict-img');

let luckyStr = 'Hurray!!You are a lucky person!';
let unluckyStr = 'Oops!!Your birthday is not a lucky number!';

function onSubmitHandler(e) {
    e.preventDefault();
    let bd = birthdateInp.value;
    let ln = luckyNumInp.value;
    
    let sumOfBdDigits = 0;
    for(let i=0; i < bd.length; i++) {
        if(bd[i] !== '-') {
            sumOfBdDigits = sumOfBdDigits + parseInt(bd[i]);
        }
    }

    if(sumOfBdDigits % parseInt(ln) === 0) {
        verdictlabel.innerHTML = luckyStr;
        verdictImg.style.backgroundImage = 'url("happy.svg")';
    }
    else {
        verdictlabel.innerHTML = unluckyStr;
        verdictImg.style.backgroundImage = 'url("unhappy.svg")';
    }

    verdictlabel.style.display = 'block';
    // verdictImg.style.display = 'block';
}

luckyDobForm.addEventListener('submit', onSubmitHandler);