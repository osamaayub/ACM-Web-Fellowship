const myObj = {
    prop1: "first value",
    prop2: 20,
};
const myArray = [40, 50, 2];
const result = myObj.prop2 === myArray[0] / myArray[2];

console.log(result);


// The ans turns out to be ture. AS 40/2 = 20, and myObj.prop2 = 20, so they are equal.
