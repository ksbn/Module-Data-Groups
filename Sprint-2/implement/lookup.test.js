const createLookup = require("./lookup.js");

describe("createLookup", () => {
  test("creates a lookup object from key-value pairs", () => {
    const pairs = [
      ["UK", "GBP"],
      ["France", "EUR"]
    ];

    const result = createLookup(pairs);

    expect(result).toEqual({
      UK: "GBP",
      France: "EUR"
    });
  });

  test("returns an empty object when passed an empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("overwrites values when keys are duplicated", () => {
    const pairs = [
      ["UK", "GBP"],
      ["UK", "USD"]
    ];

    expect(createLookup(pairs)).toEqual({
      UK: "USD"
    });
  });
});

