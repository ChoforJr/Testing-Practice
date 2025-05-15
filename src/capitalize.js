//A capitalize function that takes a string and returns it with the first character capitalized.
export function capitalize(word) {
  let newWord = `${word[0].toUpperCase()}${word.substr(1, word.length - 1)}`;
  return newWord;
}
