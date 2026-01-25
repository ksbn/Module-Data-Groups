function sum(elements) {
    if (!Array.isArray(elements)) return 0;

    return elements
    .filter(el => typeof el === "number" && !isNaN(el))
    .reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
