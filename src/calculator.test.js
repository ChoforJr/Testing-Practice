//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
//Each of these functions should take two numbers and return the correct calculation
import { calculator } from "./calculator.js";
import { describe, expect, test } from "@jest/globals";

const testCalculator = calculator();

describe("calculator", () => {
  test("calculator Add example 1", () => {
    expect(testCalculator.add(4, 5)).toEqual(9);
  });
  test("calculator Add example 2", () => {
    expect(testCalculator.add(10, 33)).toEqual(43);
  });
  test("calculator Add example 3", () => {
    expect(testCalculator.add(10.5, 5)).toEqual(15.5);
  });
  test("calculator subtract example 1", () => {
    expect(testCalculator.subtract(4, 5)).toEqual(-1);
  });
  test("calculator subtract example 2", () => {
    expect(testCalculator.subtract(33, 33)).toEqual(0);
  });
  test("calculator subtract example 3", () => {
    expect(testCalculator.subtract(10.5, 5)).toEqual(5.5);
  });
  test("calculator divide example 1", () => {
    expect(testCalculator.divide(10, 5)).toEqual(2);
  });
  test("calculator divide example 2", () => {
    expect(testCalculator.divide(20, 20)).toEqual(1);
  });
  test("calculator divide example 3", () => {
    expect(testCalculator.divide(1, 2)).toEqual(0.5);
  });
  test("calculator multiply example 1", () => {
    expect(testCalculator.multiply(10, 5)).toEqual(50);
  });
  test("calculator multiply example 2", () => {
    expect(testCalculator.multiply(20, 20)).toEqual(400);
  });
  test("calculator multiply example 3", () => {
    expect(testCalculator.multiply(3, 9)).toEqual(27);
  });
});
