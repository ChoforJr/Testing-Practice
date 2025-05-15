//A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”

import { caesarCipher } from "./caesarCipher.js";
import { describe, expect, test } from "@jest/globals";

describe("caesarCipher", () => {
  test("caesarCipher example 1", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
  test("caesarCipher example 2", () => {
    expect(caesarCipher("forloop", 3)).toBe("iruorrs");
  });
  test("caesarCipher example 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("caesarCipher example 4", () => {
    expect(caesarCipher("vex", 5)).toBe("ajc");
  });
  test("caesarCipher example 5", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("caesarCipher example 6", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("caesarCipher example 6", () => {
    expect(caesarCipher("$MeCa, hUDs# pOT!", 6)).toBe("$SkIg, nAJy# vUZ!");
  });
});
