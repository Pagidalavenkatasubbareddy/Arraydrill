function flatten(elements) {
    const flattenedArray = [];
    elements.forEach(item => {
        if (Array.isArray(item)) {
            flattenedArray.push(...flatten(item));
        } else {
            flattenedArray.push(item);
        }
    });
    return flattenedArray;
}

module.exports=flatten;