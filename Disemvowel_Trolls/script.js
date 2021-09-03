// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the 
// trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//  Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let commit = [];
    let result = '';
    commit = str.split([,]); // преобразует строку в массив
    for (let i = 0; i < commit.length; i++) {
        // if (commit[i] == 'A' || 'E' || 'I' || 'O' || 'U' || 'a' || 'e' || 'i' || 'o' || 'u') {
        //     delete commit[i];
        // }
        if (commit[i] == 'i') {  // вроде работает, но нужно красиво оформить работу с массивом глассных
            commit[i] = '';
        }

        result += commit[i];

    }
    console.log(result);
    return str;
}
console.log(disemvowel('for this kata y isnt considered a vowel.'));