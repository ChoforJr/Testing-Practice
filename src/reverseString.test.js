//A reverseString function that takes a string and returns it reversed.
import { reverseString } from "./reverseString.js";
import { describe, expect, test } from "@jest/globals";

describe("reverseString", () => {
  test("reverseString example 1", () => {
    expect(reverseString("gamer")).toBe("remag");
  });
  test("reverseString example 2", () => {
    expect(reverseString("champ")).toBe("pmahc");
  });
  test("reverseString example 3", () => {
    expect(reverseString("saiyan")).toBe("nayias");
  });
  test("reverseString example 4", () => {
    expect(reverseString("kai")).toBe("iak");
  });
});
