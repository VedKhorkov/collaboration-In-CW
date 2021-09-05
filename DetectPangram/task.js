// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A - Z at least once(case is irrelevant).

// Given a string, detect whether or not it is a pangram.Return True if it is, 
// False if not.Ignore numbers and punctuation.
function isPangram(string) {
    let res = true;
    let stringArray = [];
    const abcArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']; // добавили массив с алфавитом для сравнения
    stringArray = string.toLowerCase().split([,]); // переводим всю строку в нижний регистр (toLowerCase) и преобразует строку в массив (split )
    for (let i = 0; i < abcArray.length; i++) {
        let result = stringArray.indexOf(abcArray[i]); // проверяем массив string на наличие элементов из массива ABC
        if (result === -1) {
            return false;
        }
    }
    return res
}
const a = isPangram("The quick brown fox jumps over the lazy dog") // проверка кода
console.log(a);