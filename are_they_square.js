var isSquare = function (arr) {
  if (arr.length == 0) {
    return undefined;
  }

  let res = arr.findIndex((i) => {
    return Math.sqrt(i) % 1 !== 0;
  });

  return res === -1 ? true : false;
};

console.log(isSquare([0, 1, 4, 9]));
