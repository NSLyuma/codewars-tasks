function XO(str) {
  let x = str.match(/[x]/gi);
  let o = str.match(/[o]/gi);
  if (x === null && o === null) return true;
  if (x === null || o === null) return false;
  return x.length === o.length ? true : false;
}

console.log(XO("ekfjewjvjf"));

/*
someone's short variant

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }
*/
