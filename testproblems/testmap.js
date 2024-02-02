const items =require("../problems/details");
const map =require("../problems/map");

const mappedArray = map([1, 2, 3], element => element * 2);
console.log("Mapped Array:", mappedArray);
