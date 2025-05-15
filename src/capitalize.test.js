//A capitalize function that takes a string and returns it with the first character capitalized.
import { capitalize } from "./capitalize.js";
import { describe, expect, test } from "@jest/globals";

describe("Capitalize", () => {
  test("capitalize example 1", () => {
    expect(capitalize("gamer")).toBe("Gamer");
  });
  test("capitalize example 2", () => {
    expect(capitalize("champ")).toBe("Champ");
  });
  test("capitalize example 3", () => {
    expect(capitalize("saiyan")).toBe("Saiyan");
  });
  test("capitalize example 4", () => {
    expect(capitalize("kai")).toBe("Kai");
  });
});
