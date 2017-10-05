// 'use strict';
// const makeArray = (...values) => { return values };
// console.log('Array:', makeArray(1, 2, 3, 4));
// console.log('Array:', makeArray(1, 2, 3, 4, 5, 6));
//
// const getSum = (a, b) => { return a + b };
// console.log('1 + 2 = ', getSum(1, 2));
//
// const greeting = 'Hello, World.';
// const capitalize = (myString) => { return myString.toUpperCase() }
// console.log(greeting, '=>', capitalize(greeting));


//Sum of lements of Array
// 'use strict';
// const arr = [1, 2, 3, 4, 5];
// const sum= arr.reduce(function (a, b) {
//   return a + b;
// }, 0);
// console.log('Array:', arr);
// console.log('Sum:', sum);
// console.log('Array length:', arr.length);


//Sum of lements of Array using arrow function
// 'use strict';
// const arr = [1,2, 3, 4, 5];
// // const sum = arr.reduce((a,b) => {
// //   return a + b;
// // }, 0);
// //const sum = arr.reduce((a,b) => { return a + b; }, 0);
// const sum = arr.reduce((a, b) => a + b, 0);
// console.log('Array:',arr);
// console.log('Sum:', sum);


//Sum of lements of Array using arrow function
// 'use strict';
// const arr = [1,2, 3, 4, 5];
// const sum = arr.reduce((a,b) => {
//   return a + b;
// }, 0);
// for(var i=0; i<arr.length; i++)
// console.log(arr[i]);
// console.log('Sum:', sum);


//Find the length of strings in Array
// 'use strict';
// const arr = ['first', 'second', 'third', 'fourth', 'fifth'];
// const len = arr.map(function(s) { return s.length });
// console.log('Array:', arr);
// console.log('Lengths:', len);


//Sum of lements of Array using arrow function using arrow function
// 'use strict';
// const arr = ['first', 'second', 'third', 'fourth', 'fifth'];
// const len = arr.map(s =>s.length);
// console.log('Array:', arr);
// console.log('Lengths:', len);


//Find Array Elements Greater Than a Value
// 'use strict';
// const arr = [1, 2, 3, 4, 5];
// const greaterThan3 = arr.filter(function(a) {
//   return a > 3;
// });
// console.log('Array:', arr);
// console.log('Elements Greater Than 3:', greaterThan3);


//Find Array Elements Greater Than a Value using arrow function
// 'use strict';
// const arr = [1, 2, 3, 4, 5];
// const greaterThan3 = arr.filter(a  => a > 3 );
// console.log('Array:', arr);
// console.log('Elements Greater than 3:', greaterThan3);



var arr = [5, 6, 13, 0, 1, 18, 23];
var double = arr.map((v) => {
if(v %2 ==0) {
console.log(v * 2);  }
else {
console.log(v * 3);  }
});
// [10, 12, 26, 0, 2, 36, 46]
