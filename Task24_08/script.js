/* sum of positive number
 You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
 */

function positiveSum(arr) {
    return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
}
let arr = [1,-4,7,12]
console.log(positiveSum(arr)) /// 20