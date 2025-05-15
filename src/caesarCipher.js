//A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”
export const caesarCipher = (word, shift) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let cipheredWord = "";
  for (let i = 0; i < word.length; i++) {
    let locateIndex = alphabet.indexOf(word[i].toLowerCase()) + shift;
    if (!alphabet.includes(word[i].toLowerCase())) {
      cipheredWord += word[i];
    } else {
      if (locateIndex >= 26) {
        locateIndex = locateIndex - 26;
      }
      if (word[i] === word[i].toUpperCase()) {
        cipheredWord += alphabet[locateIndex].toUpperCase();
      } else {
        cipheredWord += alphabet[locateIndex];
      }
    }
  }
  return cipheredWord;
};
