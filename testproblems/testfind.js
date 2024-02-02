const items =require("../problems/details");
const find =require("../problems/find");

const foundElement = find([1, 2, 3], element => element === 2);
console.log("Found Element:", foundElement);

