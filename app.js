const luckyDobForm = document.querySelector('#lucky-dob-form');
const birthdateInp = document.querySelector('#inp-birthdate');
const luckyNumInp = document.querySelector('#inp-lucky-num');
const verdictlabel = document.querySelector('#verdict-label');
const verdictImg = document.querySelector('.verdict-img');

const luckyStr = 'Hurray!!You are a lucky person!';
const unluckyStr = 'Oops!!Your birthday is not a lucky number!';

cont onSubmitHandler = e => {
    e.preventDefault();
    const bd = birthdateInp.value;
    const ln = luckyNumInp.value;
    
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
