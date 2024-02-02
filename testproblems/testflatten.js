const items =require("../problems/details");
const flatten =require("../problems/flatten");


const flattenedArray = flatten([1, [2], [3, [[4]]]]);
console.log("Flattened Array:", flattenedArray);

