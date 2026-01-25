const dedupe = require("./dedupe.js");

describe("dedupe", () => {
    test("given an empty array, it returns an empty array", () => {
        expect(dedupe([])).toEqual([]);
    });

    test("given an array with no duplicates, returns a copy of the original array", () => {
        const input = [1, 2, 3];
        const result = dedupe(input);

        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(input);
    });

    test("removes duplicate strings and preserves order", () => {
        expect(dedupe(["a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    });

    test("removes duplicate numbers and preserves order", () => {
        expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    });

    test("works with mixed numbers and strings", () => {
        expect(dedupe([1, "1", 1, "1"])).toEqual([1, "1"]);
    });

    test("given [1, 2, 1], returns [1, 2]", () => {
        expect(dedupe([1, 2, 1])).toEqual([1, 2]);
    });

    test("returns empty array if input is not an array", () => {
        expect(dedupe(null)).toEqual([]);
        expect(dedupe(undefined)).toEqual([]);
        expect(dedupe(123)).toEqual([]);
    });
});





