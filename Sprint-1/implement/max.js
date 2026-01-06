function findMax(elements) {
   if (!Array.isArray(elements)) return -Infinity;

   const numbers = elements.filter(el => typeof el === "number" && !isNaN(el));

   if (numbers.length === 0) return -Infinity;

   return Math.max(...numbers);
}

module.exports = findMax;
