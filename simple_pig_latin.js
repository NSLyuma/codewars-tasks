"use strict";

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')

function pigIt(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (/\w/.test(arr[i])) {
            let wordArr = arr[i].split("");
            let firstLetter = wordArr[0];
            wordArr.shift();
            wordArr.push(firstLetter + "ay");
            arr[i] = wordArr.join("");
        }
    }
    return arr.join(" ");
}

console.log(pigIt("Pig latin is cool !"));