/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe("findMax", () => {
    test("given an empty array, returns -Infinity", () => {
        expect(findMax([])).toBe(-Infinity);
    });

    test("given an array with one number, returns that number", () => {
        expect(findMax([42])).toBe(42);
    });

    test("given an array with both positive and negative numbers, returns the largest number", () => {
        expect(findMax([10, -5, 20, -100, 0])).toBe(20);
    });

    test("given an array with just negative numbers, returns the closest one to zero", () => {
        expect(findMax([-10, -3, -7])).toBe(-3);
    });

    test("given an array with decimal numbers, returns the largest decimal number", () => {
        expect(findMax([1.5, 2.7, 0.3, 2.6])).toBe(2.7);
    });

    test("given an array with non-number values, ignores them and returns the max number", () => {
        expect(findMax([10, "hello", null, 25, undefined, 5])).toBe(25);
    });

    test("given an array with only non-number values, returns -Infinity", () => {
     expect(findMax(["apple", null, undefined])).toBe(-Infinity);
    });

    test("handles NaN values correctly (ignores them)", () => {
        expect(findMax([10, NaN, 20])).toBe(20);
    });

    test("handles arrays with Infinity and -Infinity correctly", () => {
        expect(findMax([10, Infinity, 1000])).toBe(Infinity);
        expect(findMax([-Infinity, -10, -5])).toBe(-5);
    });

    test("returns -Infinity if input is not an array", () => {
        expect(findMax(null)).toBe(-Infinity);
        expect(findMax(undefined)).toBe(-Infinity);
        expect(findMax(123)).toBe(-Infinity);
        expect(findMax("hello")).toBe(-Infinity);
    });
});

