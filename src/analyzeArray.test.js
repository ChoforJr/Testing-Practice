//An analyzeArray function that takes an array of numbers and returns an
//object with the following properties: average, min, max, and length.
import { analyzeArray } from "./analyzeArray.js";
import { describe, expect, test } from "@jest/globals";

describe("analyzeArray", () => {
  test("analyzeArray example 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("analyzeArray example 2", () => {
    expect(analyzeArray([2, 4, 5, 0, 9, 10, 12])).toStrictEqual({
      average: 6,
      min: 0,
      max: 12,
      length: 7,
    });
  });
});
