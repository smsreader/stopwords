import {stopWordsArray} from './scripts/stopwords';
import {toxicWordsArray} from './scripts/toxicwords';

const myForm = document.forms[0];
const result__stop = document.querySelector('.result__stop');
const result__toxic = document.querySelector('.result__toxic');
const stopBtn = document.querySelector('.stopBtn');
const toxicBtn = document.querySelector('.toxicBtn');

function arrToStr (arr) {
    let i;
    let str = "";
    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            str = arr[i]
        } else {
            str = str + " " + arr[i];
        }
    }
    return str;
}
function checkWord(text, word, className){

    if (word) {
        word = word.replace(/,/, '');
        word = word.split(' ');
        let regString = word[0];
        for (let i = 1; i < word.length; i++) {
            regString = regString + '\(\?\: \|, \)' + word[i];
        }
        regString = '\(\?\: \|\'\|\\r\)' + regString + '\(\?\:\\.\|,\|\\s|\')';
        let newWord = new RegExp (regString, 'gi');
        text = text.replace(newWord, '<span class="' + className + '"> ' + arrToStr(word) + ' </span>');

        return  text;
    }
}

myForm.elements.inputText.addEventListener('input', function(){
    let newString = "";
    let textToCheck = myForm.elements.inputText.value;
    for (let j = 0; j < stopWordsArray.length; j++) {
        newString = checkWord(textToCheck, stopWordsArray[j], 'word--stop');
        textToCheck = newString;
    }
    result__stop.innerHTML = newString;
});
myForm.elements.inputText.addEventListener('input', function(){
    let newString = "";
    let textToCheck = myForm.elements.inputText.value;
    for (let j = 0; j < toxicWordsArray.length; j++) {
        newString = checkWord(textToCheck, toxicWordsArray[j], 'word--toxic');
        textToCheck = newString;
    }
    result__toxic.innerHTML = newString;
});
let str = 'Stop Word & Expression Validator 2.0';
console.log ( '%c%s', 'color: green; font: 14px/1 Tahoma;', str );
