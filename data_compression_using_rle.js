// Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

// A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

// Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.

function encode(input) {
  let res = '';
  let counter = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter++;
    } else {
      res += counter + input[i];
      counter = 1;
    }
  }
  return res;
}

function decode(input) {
  let res = '';
  let counter = '';
  for (let i = 0; i < input.length; i++) {
    while (isNumber(input[i])) {
      counter += input[i];
      i++;
    }
    res += input[i].repeat(+counter);
    counter = '';
  }
  return res;
}

const isNumber = (sym) => {
  return !isNaN(sym);
};

// console.log(encode('A')); //'1A'
// console.log(encode('AB')); //'1A1B'
// console.log(encode('AAABBBCCCA')); //'3A3B3C1A'

// console.log(decode('1A')); //'A'
// console.log(decode('1A1B')); //'AB'
console.log(decode('3A3B3C10A')); //'AAABBBCCCA'

// console.log(encode(decode('10A1B')));
