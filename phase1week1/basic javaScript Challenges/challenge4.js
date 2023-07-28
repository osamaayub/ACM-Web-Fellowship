
/*
*/
// Why is this code invalid?
const objectVariable = {
    propertyl: 'i am property 1';
    property2: 'i am property 2';
    property3: [20, 30, 40];
    };
    // Edit this until it is valid.
    console. log(objectVariable.property3[21);
    
    
    
    // Correct Syntax
    const objectVariable = {
      property1: 'i am property 1',
      property2: 'i am property 2',
      property3: [20, 30, 40],
    };
    
    console.log(objectVariable.property3[0]); // Accessing the first element (index 0) of property3 array.
    