// You are going to be given a word.Your job is to return the middle character of the word.
// If the word's length is odd, 
// return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    let result;
    let getMiddleString = s.length; // считаем количество знаков в строке
    if (getMiddleString % 2 == 0) { // проверяем, если делиться без остатка выполняем
        let resultFirst = getMiddleString / 2 - 1;
        let resultSecond = getMiddleString / 2;
        return s.charAt(resultFirst) + s.charAt(resultSecond);
    }
    let resultMiddle = (getMiddleString - 1) / 2; // иначе выводим по другому условию
    return s.charAt(resultMiddle);


}


console.log(getMiddle('a'));