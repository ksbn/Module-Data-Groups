function dedupe(elements) {
    if (!Array.isArray(elements)) return [];

    const result = [];

    for (const el of elements) {
        if (!result.includes(el)) {
            result.push(el);
        }
    }

    return result;
}

module.exports = dedupe;
