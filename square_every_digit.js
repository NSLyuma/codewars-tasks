function squareDigits(num) {
  let numArr = [...String(num)];
  let sqrArr = [];
  numArr.map((item) => {
    item = (+item) ** 2;
    sqrArr.push(item);
  });
  let newNum = sqrArr.join("");
  return +newNum;
}

squareDigits(123);
