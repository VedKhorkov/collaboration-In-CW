// In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
function squareDigits(num) {
    let numString = num.toString(); /* перевод числа в строку с помощью метода toString */
    let result = []; /* создания массива для записи результатов работы с строчными значениями */
    for (let i = 0; i < numString.length; i++) {
        result[i] = numString[i] * numString[i]; /* возводим в квадрат каждое значение и записываем в массив */
    }
    return Number(result.join(''));/* с помощью join "склеиваеваем" элементы массива и с помощью Numder переводим строки опять в числа */
}
console.log(squareDigit(56)); /* делаем проверку в браузере */