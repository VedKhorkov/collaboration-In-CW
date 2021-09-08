
function highAndLow(numbers) {
    // необходимо строку перевести в массив с сохранением знакака перед числом
    let numbersArray = numbers.split(' ')
    // console.log(numbersArray);
    return String(Math.max(...numbersArray)) + ' ' + String(Math.min(...numbersArray))

}
console.log(highAndLow("1 2 3 4 5 -9"));