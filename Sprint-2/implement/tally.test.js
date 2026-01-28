const tally = require("./tally.js");

describe("tally", () => {
  test("counts occurrences of items in an array", () => {
    const input = ["a", "b", "a", "c", "b", "a"];

    const result = tally(input);

    expect(result).toEqual({
      a: 3,
      b: 2,
      c: 1
    });
  });

  test("returns an empty object for an empty array", () => {
    expect(tally([])).toEqual({});
  });

  test("counts numbers correctly", () => {
    expect(tally([1, 2, 2, 3])).toEqual({
      1: 1,
      2: 2,
      3: 1
    });
  });

  test("throws an error when input is not an array", () => {
    expect(() => tally("not an array")).toThrow("Input must be an array");
  });
});
