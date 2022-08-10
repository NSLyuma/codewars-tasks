"use strict";

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// Test.assertEquals(
//     JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//     JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
//   );

function moveZeros(arr) {
    let counter = arr.length;
    for (let i = 0; i < counter; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
            counter--;
            i--;
        }
    }
    return arr;
}

console.log(moveZeros([0, "a", 0, 0, "b", null, 0, "c", 0, "d", 1, 0, 0, false, 1, 3, 0, [], 1, 9, 0, {}, 9]))