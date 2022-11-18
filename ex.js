// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

const findUniq = (arr) => {
  return Number(
    arr.sort().filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
  );
};

console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));

// assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
//     assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
