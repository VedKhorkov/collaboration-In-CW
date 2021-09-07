// You are going to be given a word.Your job is to return the middle character of the word.
// If the word's length is odd, 
// return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    let getMiddleString = s.length; // считаем количество знаков в строке
    if (getMiddleString % 2 == 0) { // проверяем, если делиться без остатка выполняем
        let resultFirst = getMiddleString / 2;
        let resultSecond = getMiddleString / 2 + 1;
        console.log(resultFirst);
        console.log(resultSecond);
    }

    // console.log(getMiddleString); // test

}
getMiddle('test');