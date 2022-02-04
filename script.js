// Password Generator
// Password Generator

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// Calculator
const displayElement1 = document.querySelector('.cal-display1');
const displayElement2 = document.querySelector('.cal-display2');
const tempResultElement = document.querySelector('.cal-temp-result');
const numbersElement = document.querySelectorAll('.cal-number');
const operationElement = document.querySelectorAll('.cal-operation');
const allClearElement = document.querySelector('.cal-all-clear');
const lastEntryClearElement = document.querySelector('.cal-last-entry-clear');
const equalElement = document.querySelector('.cal-equal');
const dotElement = document.querySelector('.cal-dot');

let miniDisplay = '';
let mainDisplay = '';
let tempResult = null;
let lastOperation = '';
let haveDot = false;

numbersElement.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return
        };
        mainDisplay += e.target.innerText;
        displayElement2.innerText = mainDisplay;
    });
});

operationElement.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if(!mainDisplay){result;}
        haveDot = false;
        const operation = e.target.innerText;
        miniDisplay && mainDisplay && lastOperation ? mathOperation() : result = parseFloat(mainDisplay);
        clearVar(operation)
        lastOperation = operation;
    })
})

clearVar = (name = '') => {
    miniDisplay += mainDisplay + ' ' + name + ' ';
    displayElement1.innerText = miniDisplay;
    displayElement2.innerText = '';
    mainDisplay = '';
    tempResultElement.innerText = result;
}

mathOperation = () => {
    if(lastOperation === '/'){ result = Number(result / mainDisplay) }
    else if(lastOperation === 'X'){ result = Number(result * mainDisplay)}
    else if(lastOperation === '-'){ result = Number(result - mainDisplay)}
    else if(lastOperation === '+'){ result = Number(result) + Number(mainDisplay)}
    else if(lastOperation === '%'){ result = Number(result % mainDisplay)}
}

equalElement.addEventListener('click', (e) => {
    if(!miniDisplay || !mainDisplay) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayElement2.innerText = result;
    tempResultElement.innerText = '';
    mainDisplay = result;
    miniDisplay = '';
})

allClearElement.addEventListener('click', () => {
    displayElement1.innerText = '0';
    displayElement2.innerText = '0';
    mainDisplay = '';
    miniDisplay = '';
    tempResultElement.innerText = '0';
});

lastEntryClearElement.addEventListener('click', () => {
    displayElement2.innerText = '';
    mainDisplay = '';
})

window.addEventListener('keydown', (e) => {
    if(e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '8' || e.key === '9' || e.key === '.'){
        clickBtnElement(e.key);
    }else if (e.key === '/' || e.key === '+' || e.key === '-' || e.key === '%'){
        clickOperation(e.key)
    }else if(e.key === '*'){
        clickOperation('X')
    }else if(e.key == 'Enter' || e.key === '='){
        clickEqual();
    }
})

clickBtnElement = (key) => {
    numbersElement.forEach( button => {
        if(button.innerText === key){
            button.click();
        }
    })
}
clickOperation = (key) => {
    operationElement.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    })
}
clickEqual = () => {
    equalElement.click()
}

// Dad Jokes
const jokeElement = document.getElementById('joke-area')
const jokeBtn = document.getElementById('joke-btn')

const generateJoke = () => {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then((item) => item.json())
    .then((result) => {
        jokeElement.innerText = `"${result.joke}"`;
    })
}

jokeBtn.addEventListener('click', ()=> {
    generateJoke()
})

// Ripple on mouse click
const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const xInside = e.clientX
        const yInside = e.clientY

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)
    })
})

// Turn body
const bodyElement = document.querySelector("BODY");
const cardCatElement = document.querySelector(".card-cat");

const hiddenCatCutton = document.querySelector(".hidden-cat");
hiddenCatCutton.addEventListener('click', function(e){
    if(cardCatElement.style.display === 'none'){
        cardCatElement.style.display = 'block';
    } else {
        cardCatElement.style.display = 'none';
    }
    if(bodyElement.classList.contains('turn-body') === true){
        bodyElement.classList.remove('turn-body');
        cardCatElement.style.display = 'none';
    }
})

const hiddenPhotoButton = document.querySelector('.hidden-photo');
hiddenPhotoButton.addEventListener('click', function (e){
    if(bodyElement.classList.contains('turn-body') === true){
        bodyElement.classList.remove('turn-body');
    } else {
        bodyElement.classList.add('turn-body');
        cardCatElement.style.display = 'none';
    }
})

//Scrolling effect
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 3;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}