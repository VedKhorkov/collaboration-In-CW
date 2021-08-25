/* sum of positive number
 You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
 */

function positiveSum(arr) {
    return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
}
let arr = [1,-4,7,12]
console.log(positiveSum(arr)) /// 20

/* Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */


function findShort(s){
    const result = Math.min(...s.split(' ').map((word) => word.length));
    return result;
}
let s = "bitcoin take over the world maybe who knows perhaps"
console.log(findShort(s)) //3


function filterList1(l){
    let arr = []
    l.forEach()
}



function filterList(l){
    let func = el => el === Number
    let num = l.filter(func)
    return num
}
console.log(filterList([1,2,'a','b']),[1,2])