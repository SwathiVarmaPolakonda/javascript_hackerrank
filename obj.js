//Iterating over arrays

//using for loop
// const arr = ['a','b','c', 'd'];
// for(var i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

//for..in loop
// const o = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// };
//
// console.log('property: value');
// // 'p' is the property
// for (p in o) {
//     console.log(p + ': ' + o[p]);
// }

//Iterating over array elements
// const o = ['first', 'second', false];
//
// // 'p' is the index
// for (let p in o) {
//     console.log(p + ' ' + o[p]);
// }


//ForEach Method
const arr = ['a', 'b', 'c', 'd'];

arr.forEach((value, index, array) => {
    console.log('index', index, 'has a value of', value,
    'which correlates to array[' + index + ']:', array[index]);
});

arr.forEach((value, index) => {
    console.log('index', index, 'has a value of', value);
});

arr.forEach((value) => {
    console.log('value:', value);
});
