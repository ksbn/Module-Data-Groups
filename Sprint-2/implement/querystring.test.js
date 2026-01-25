// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

describe("parseQueryString", () => {
  test("returns an empty object when passed an empty string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses a single key-value pair", () => {
    expect(parseQueryString("a=1")).toEqual({ a: "1" });
  });

  test("parses multiple key-value pairs", () => {
    expect(parseQueryString("a=1&b=2")).toEqual({
      a: "1",
      b: "2"
    });
  });

  test("assigns empty string to keys without values", () => {
    expect(parseQueryString("flag")).toEqual({
      flag: ""
    });
  });

  test("handles mixed pairs with and without values", () => {
    expect(parseQueryString("a=1&flag&b=2")).toEqual({
      a: "1",
      flag: "",
      b: "2"
    });
  });
});