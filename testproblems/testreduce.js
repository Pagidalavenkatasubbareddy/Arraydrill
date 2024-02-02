const items =require("../problems/details");
const reduce =require("../problems/reduce");
const sum = reduce([1, 2, 3], (accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum);