const items =require("../problems/details");

const each =require("../problems/each");



function callbackFunction(element, index) {
    
    each([1, 2, 3], (element, index) => {
        console.log(`Element at index ${index}: ${element}`);
    });
}

each([1, 2, 3], callbackFunction);