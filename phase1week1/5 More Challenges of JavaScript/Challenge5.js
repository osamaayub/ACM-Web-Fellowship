const myObj = {
    nestedObj1: {
        price: 100,
        quantity: 2,
    },
    nestedObj2: {
        price: 150,
        quantity: 2,
    },
};
const myArray = [myObj.nestedObj1, myObj.nestedObj2];
const result =
    myArray[0].price * myArray[0].quantity >
    myArray[1].price * myArray[1].quantity;

console.log(result);
// The ans turns out to be false. As 100*2 = 200, and 150*2 = 300, so 200 is not greater than 300.
