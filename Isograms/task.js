// An isogram is a word that has no repeating letters, 
// consecutive or non - consecutive.Implement a function that 
// determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram.Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
function isIsogram(str) {
    let strArray = str.toLowerCase().split([])
    console.log(strArray);
    let x;
    let result = false;
    if (str == '') {
        return true;
    }
    for (let i = 0; i < strArray.length; i++) { // переберает элементы массива 
        x = i + 1;
        for (x; x < strArray.length; x++) {
            result = (strArray[i] != strArray[x]);
            if (result == false) {
                return result;
            }
        }
    }
    return result;
}

console.log(isIsogram(""));