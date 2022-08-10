function pyramidHeight(n) {
  if (n === 1) return 1;
  let count = 0;
  if (n > 0) {
    for (i = 1; i < n; i++) {
      if (n - i * i >= 0) {
        n -= i * i;
        count++;
      }
    }
  }
  return count;
}

console.log(pyramidHeight(1)); //1
console.log(pyramidHeight(4)); //1
console.log(pyramidHeight(5)); //2
console.log(pyramidHeight(12)); //2
console.log(pyramidHeight(14)); //3
console.log(pyramidHeight(19)); //3
console.log(pyramidHeight(30)); //4
console.log(pyramidHeight(45)); //4
console.log(pyramidHeight(78)); //6
console.log(pyramidHeight(100)); //6
console.log(pyramidHeight(150)); //7
console.log(pyramidHeight(200)); //8
console.log(pyramidHeight(500)); //11
