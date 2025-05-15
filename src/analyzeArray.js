//An analyzeArray function that takes an array of numbers and returns an
//object with the following properties: average, min, max, and length.

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let leftArray;
    if (array.length % 2 === 0) {
      leftArray = array.slice(0, array.length / 2);
    } else {
      leftArray = array.slice(0, array.length / 2 + 1);
    }
    let rightArray = array.slice(Math.ceil(array.length / 2));
    mergeSort(leftArray);
    mergeSort(rightArray);
    return merge(leftArray, rightArray, array);
  }
}
function merge(left, right) {
  return [...left, ...right].sort((a, b) => a - b);
}
export function analyzeArray(arr) {
  const newArr = mergeSort(arr);
  let arrSum = 0;
  arr.forEach((element) => {
    arrSum += element;
  });
  return {
    average: arrSum / arr.length,
    min: newArr[0],
    max: newArr[arr.length - 1],
    length: arr.length,
  };
}
