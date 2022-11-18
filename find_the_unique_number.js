'use strict';

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

function findUniq(arr) {
  let num = 0;
  let sortedArr = arr.sort();
  if (sortedArr[0] !== sortedArr[1]) {
    num = sortedArr[0];
  } else if (
    sortedArr[sortedArr.length - 2] !== sortedArr[sortedArr.length - 1]
  ) {
    num = sortedArr[sortedArr.length - 1];
  } else {
    let shortArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] !== sortedArr[i + 1]) {
        shortArr.push(sortedArr[i]);
      }
    }
    num = shortArr[1];
  }
  return num;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(
  findUniq([
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3,
  ])
);
console.log(findUniq([3, 3, 3, 3, 3, 1]));
console.log(findUniq([5, 1, 1, 3, 3, 3, 3, 3, 3, 3]));

//Ещё один вариант решения
// const findUniq = (arr) => {
//   return Number(
//     arr.sort().filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
//   );
// };
