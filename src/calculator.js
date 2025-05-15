//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
//Each of these functions should take two numbers and return the correct calculation
export const calculator = () => {
  function add(num1, num2) {
    return num1 + num2;
  }
  function subtract(num1, num2) {
    return num1 - num2;
  }
  function divide(num1, num2) {
    return num1 / num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  return { add, subtract, divide, multiply };
};
