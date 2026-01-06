/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum", () => {
    test("given an empty array, returns 0", () => {
        expect(sum([])).toBe(0);
    });

    test("given an array with one number, returns that number", () => {
        expect(sum([5])).toBe(5);
    });

    test("given an array with decimal numbers, returns correct sum", () => {
        expect(sum([1.5, 2.5, 3])).toBe(7);
    });

    test("given an array with non-number values, ignores them", () => {
        expect(sum([10, "hello", null, 20, undefined])).toBe(30);
    });

    test("given an array with only non-number values, returns 0", () => {
        expect(sum(["apple", null, undefined])).toBe(0);
    });

    test("ignores NaN values", () => {
        expect(sum([10, NaN, 20])).toBe(30);
    });

    test("returns 0 if input is not an array", () => {
        expect(sum(null)).toBe(0);
        expect(sum(undefined)).toBe(0);
        expect(sum(123)).toBe(0);
    });
});

