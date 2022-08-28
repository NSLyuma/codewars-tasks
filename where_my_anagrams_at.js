const anagrams = (word, words) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].toString().split("").sort().join("") ===
      word.split("").sort().join("")
    ) {
      result.push(words[i]);
    }
  }
  return result;
};

console.log(anagrams("rew", ["rew", "wer", "re", "tre", "qfv", 123]));
