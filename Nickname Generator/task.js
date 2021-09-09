// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

//     nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

//     nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

//     Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase(e.g.Sam).
// The input can be modified

function nicknameGenerator(name) {

    const vowelArray = ['a', 'e', 'i', 'o', 'u'] // создаем массив глассных для проверки
    const nameArray = name.split([]);
    if (name.length < 4) {
        return "Error: Name too short"; // проверяем чтобы не меньше трех знаков
    }
    for (let i = 0; i < vowelArray.length; i++) {
        if (nameArray[2] == vowelArray[i]) {
            return name.slice(0, 4)
        }
    }
    return name.slice(0, 3)

}
console.log(nicknameGenerator('Gregorian'));