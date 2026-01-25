const invert = require("./invert.js");

describe("invert", () => {
  test("inverts keys and values of an object", () => {
    const input = { a: 1, b: 2 };

    expect(invert(input)).toEqual({
      1: "a",
      2: "b"
    });
  });

  test("groups keys when values are duplicated", () => {
    const input = { a: 1, b: 1, c: 2 };

    expect(invert(input)).toEqual({
      1: ["a", "b"],
      2: "c"
    });
  });

  test("returns an empty object for an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("throws an error when input is not an object", () => {
    expect(() => invert(null)).toThrow("Input must be an object");
    expect(() => invert([])).toThrow("Input must be an object");
  });
});
