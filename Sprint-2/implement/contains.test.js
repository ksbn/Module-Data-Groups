const contains = require("./contains.js");

describe("contains", () => {
  test("returns false for an empty object", () => {
    expect(contains({}, "a")).toBe(false);
  });

  test("returns true if object contains the property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  test("returns false if object does not contain the property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  test("returns false when passed an array", () => {
    expect(contains(["a", "b"], "a")).toBe(false);
  });

  test("returns false when passed null", () => {
    expect(contains(null, "a")).toBe(false);
  });
});
