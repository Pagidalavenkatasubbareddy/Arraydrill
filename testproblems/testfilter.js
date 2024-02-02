const items =require("../problems/details");
const filter =require("../problems/filter");


const filteredArray = filter([1, 2, 3], element => element > 1);
console.log("Filtered Array:", filteredArray);