const form = document.forms[0];
const formTextarea = document.forms[0].elements.mainText;
const result = document.querySelector('.result');


form.onsubmit = (e) => {
    e.preventDefault();
    result.innerHTML = '';
    let text = formTextarea.value;
    text = text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    // на этой стадии исходный текст называется text и очищен от знаков препинания
    let textArray = text.split(' ');
    // теперь добавим в конец нашего массива textArray слова "wow" и "jee", которых в текстах быть не может
    textArray.push('wow');
    textArray.push('jee');
    textArray.push('kek');
    

    let resultArray = [];

    /* проверка на вхождение в stopWordsArray текущего элемента массива textArray и следующего за ним 
    - не составляют ли они запретное слово, пару, тройку */
    for (let i = 0; i < textArray.length; i++) {
        let word = textArray[i];
        let twoWords = textArray[i] + ' ' + textArray[i + 1];
        let threeWords = textArray[i] + ' ' + textArray[i + 1] + ' ' + textArray[i + 2];
        let fourWords = textArray[i] + ' ' + textArray[i + 1] + ' ' + textArray[i + 2] + ' ' + textArray[i + 3];
        word = word.toLowerCase();
        twoWords = twoWords.toLowerCase();
        threeWords = threeWords.toLowerCase();
        fourWords = fourWords.toLowerCase();
        if(stopWordsArray.indexOf(word) != -1) {
            resultArray.push(word);
        }
        if(stopWordsArray.indexOf(twoWords) != -1) {
            resultArray.push(twoWords);
        } 
        if(stopWordsArray.indexOf(threeWords) != -1) {
            resultArray.push(threeWords);
        }				
        if(stopWordsArray.indexOf(fourWords) != -1) {
            resultArray.push(fourWords);
        }
    }

    //console.log(resultArray);

    resultArray.forEach((item) => {
        newP = document.createElement('p');
        if ( item.includes(` `) ) {
        newP.innerHTML = `Стоп-выражение: "${item}"`;
        } else {
        newP.innerHTML = `Стоп-слово: "${item}"`;
        }
        
        result.appendChild(newP);
    });
}