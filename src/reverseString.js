//A reverseString function that takes a string and returns it reversed.
export function reverseString(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
  }
  return reversedWord;
}
