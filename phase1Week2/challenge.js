//String Methods in JavaScript


const mystring="some string!";


mystring.toUpperCase();

const result=mystring[0].toUpperCase()+mystring.substring(1,mystring.length);
console.log(result);

const terminate=mystring.trim();
console.log(terminate);


const regx=/[a-z]+/;

const str='aaabfvjvnfkvrf222556';
console.log(str.match(regx));


//Array Methods in JavaScript

const array=[1,2,3,5,6];
array.shift();
console.log(array);

array.unshift(0);
console.log(array);

// const map=array.map((index)=>{
//     console.log(index);
// })
// console.log(map);

// const avengers = ['thor', 'captain america', 'hulk'];
// avengers.forEach((item, index)=>{
// 	console.log(index, item)
// })

/* The code is creating an array called `array2` with the values `[36, 25, 6, 15]`. */
const array2 = [36, 25, 6, 15];

// const sum=array2.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0); // 36 + 

// console.log(sum);


// const condition=array2.filter((index)=>{
//     return index%2===0;
// })
// console.log(condition)

// const condition=array2.includes((index)=>{
//     return array[index]===36;
// })
// console.log(condition)


// const index=array2.indexOf(36);
// console.log(index)

// const index = array2.findIndex((item) => item === 36);
// console.log(index);

// const string = 'The quick brown fox jumps over the lazy dog.';

// console.log(string.slice(31));

// const remove=array2.splice(4);
// console.log(remove);




