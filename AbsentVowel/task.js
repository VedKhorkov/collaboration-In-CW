// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
//     E has an index of 1,
//         I has an index of 2,
//             O has an index of 3,
//                 U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all 
// vowles but one.Also, you won't need to worry about capitals.

function absentVowel(x) {
    const vowelArray = ['a', 'e', 'i', 'o', 'u'] // сщздаем массив глассных для проверки
    const arrayX = x.toLowerCase().split([,]);// переводим всю строку в нижний регистр (toLowerCase) и преобразует строку в массив (split )
    console.log(arrayX); // testing
    for (let i = 0; i < vowelArray.length; i++) {
        let result = arrayX.indexOf(vowelArray[i]); // проверяем массив arrayX(заданный ) на наличие элементов из массива vowelArray
        if (result === -1) {
            return i; // если не нашли элемент с i индексом - возвращаем значение
        }
    }

    return false;
}
const a = absentVowel("Bb Smith sent us six neatly arranged range bicycles");
console.log(a);