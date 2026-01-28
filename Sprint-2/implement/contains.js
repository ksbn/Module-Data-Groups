function contains(obj, property) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
      return false;
    }
    return obj.hasOwnProperty(property);
}

module.exports = contains;
