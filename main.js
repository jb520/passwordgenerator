//DOM elements

const resultEl = document.getElementById('pwd');
const lengthEl = document.getElementById('length'); 
const numEl = document.getElementById('num');
const lcaseEl = document.getElementById('lcase');
const ucaseEl = document.getElementById('ucase');
const symEl = document.getElementById('sym');
const generateEl = document.getElementById('genbtn');
//const copyEl = document.getElementById('copy'); *not implemented

const genFunc = {
    num: randomNum,
    lcase: randomLcase,
    ucase: randomUcase,
    sym: randomSym
};

//Generate Button click event
generateEl.addEventListener('click', () => {
    const pwLength = +lengthEl.value;
    const hasNum = numEl.checked;
    const hasLcase = lcaseEl.checked;
    const hasUcase = ucaseEl.checked;
    const hasSym = symEl.checked;

    resultEl.innerText = generatePassword(pwLength, hasNum, hasLcase, hasUcase, hasSym);
});

//Generate Password function
function generatePassword(num, lcase, ucase, sym, pwLength) {

    let newPassword = '';

    const checkCount = num + lcase + ucase + sym;
    const checkArr = [{num}, {lcase}, {ucase}, {sym}].filter(item => Object.values(item)[0]);

    if(checkCount === 0) {
        return '';
    }

    for(let i = 0; i < pwlength; i += checkCount) {
        checkArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log('funcName:', funcName);

            newPassword += genFunc[funcName]();
        });
    }

}

// Generator functions - https://net-comber.com/charset.html

function randomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomLcase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUcase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomSym() {
    const symbol = '!@#$%^&*(){}[]=<>/.,~:;-_';
    return symbol[Math.floor(Math.random() * symbol.length)]
}