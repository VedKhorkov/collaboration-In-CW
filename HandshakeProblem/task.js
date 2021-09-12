// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking.Johnny 
// knows that no two farmers handshake more than once.He also knows that some of the possible handshake combinations may not happen.

//     However, Johnny would like to know the minimal amount of 
//     people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of 
// handshakes and returns the minimal amount of people needed to perform 
// these handshakes(a pair of farmers handshake only once).

function getParticipants(handshakes) {
    let sum = handshakes;
    let counter = 0;
    let iMan = 1;
    let result;
    let discr;
    // while (result < sum) {
    //     counter = counter + 1
    //     console.log('counter=', counter);
    //     result = result + (counter - 1)
    //     console.log('result=', result);
    // }
    // result = iMan - 1;
    // counter = result - iMan;
    // if (counter == sum) {
    //     console.log(result);
    // }
    // iMan = iMan + 1

    // return result;

    // while (counter != sum) { // 0 != 1
    //     result = iMan - 1    //  1-1 = 0 result
    //     counter = result + iMan; // 0+1 =1
    //     iMan = iMan + 1      //  1+1 = 2 iMan

    // }
    // return result;
    discr = 1 + 8 * sum;
    console.log(discr);
    result = (1 + Math.sqrt(discr)) / 2;
    console.log(Math.sqrt(discr));
    return result;
}
console.log(getParticipants(6));