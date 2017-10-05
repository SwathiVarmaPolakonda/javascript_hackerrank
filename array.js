//Creating array
// var a = ["first", "second"];
// console.log("elements of array:" + a);
// console.log("length of array:"+ a.length);
// console.log("hello");


// const arr = ['a', 'b', 'c', 'd'];
//
// // 'i' is the index
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Accessing array item
// let a= ['first', 'second'];
// let first = a[0];
// let last = a[a.length - 1];
// console.log("a[0]:" , first);
// console.log('a[a.length -1]:', last);



//loop over an array
// var a = ['first', 'second','third'];
//
// a.forEach(function(e, i, array) {
//     // 'i' is the index
//     // 'e' is the element
//     console.log(i + ' ' + e);
// });

// var a = ['first', 'second'];
//
// a.forEach(function(e, i, array) {
//     // 'i' is the index
//     // 'e' is the element
//     console.log(i + ' ' + e);
// });


//Append to the end of an array
// var a = ['first', 'second'];
// //Append third to array 'a'
// a.push('third');
// console.log('elements', a);


//Remove from the end of array
// var a = ['first', 'second', 'third', 'fourth'];
// console.log('original array is:', a);
// //remove the last element from the array
// let removed = a.pop();
// console.log('Modified array:', a);
// console.log('Removed element is:', removed);


//Remove from the front of an array
// var a = ['first', 'second', 'third'];
// console.log('original array is:', a);
// //Remove the first element from the array
// let removed = a.shift();
// console.log('Modified array is:', a);
// console.log('removed element is:', removed);


//Add to the front of an array
// var a = ['first', 'second', 'third'];
// console.log('original array is:', a);
// a.unshift('fourth');
// console.log('modified array is:', a);


//Find the index of an item in the array
// var a = ['first', 'second', 'third'];
// let position = a.indexOf('second');
// console.log('array elements:', a);
// console.log('index of first element is:', a.indexOf('first'));
// console.log('index of second element is:', position);
// console.log('index of third element is:', a.indexOf('third'));


//Remove an item by index position
// var a = ['first', 'second', 'third','fourth', 'fifth'];
// console.log('original array is:', a);
// let position = 1;
// let elementsToRemove = 2;
// //Remove 'elementsToRemove' element(s) starting at 'position'
// a.splice(position, elementsToRemove);
// console.log('Modified array is:', a);



//Copy an array
// var a = ['first', 'second', 'third', 'fourth', 'fifth'];
// console.log('First array is:', a);
// //shallow copy array 'a' into a new object
// let b = a.slice();
// console.log('Second array is', b);


//sort an array
// var a = ['c', 'a', 'd', 'b', 'aa'];
// var b = [9, 2, 13, 7, 1, 12, 123];
// //sort in ascending lexicographical order using build-in
// a.sort();
// b.sort();
// console.log('array A is:', a);
// console.log('array b is:', b);


// var a = ['c', 'a', 'd', 'b', 'aa'];
// //sort in descending lexicographical order using a compare arrow
// a.sort((x,y) => x < y);
// console.log('array in descending order is:', a);


//Iterate over an array
// var a = ['first', 'second','third', 'forth'];
// for (let e of a) {
//   console.log(e);
// }

// var arr = [14, 46, 47, 86, 92, 52, 48, 36, 66, 85 ];
// 	var largest = arr[0];
// 		var secondLargest = arr[0];
// console.log("the given array is :", arr);
//
//
// 		for (let i = 0; i < arr.length; i++) {
//
// 			if (arr[i] > largest) {
// 				secondLargest = largest;
// 				largest = arr[i];
//
// 			} else if (arr[i] > secondLargest) {
// 				secondLargest = arr[i];
//
// 			}
//
// 		}

// function getSecond() {
// 	var arr = [2, 3, 6, 6, 5];
// 	var first = 0, second = 0;
// 	for(i=0; i<arr.length; i++) {
// 		if(arr[i] > first) {
// 			second = first;
// 			first = arr[i];
// 		}
// 		else if (arr[i] > second && arr[i] < first) {
// 			second = arr[i];
//
// 		}
// 	}
// 	return second;
// 	console.log(arr[i]);
// }
// console.log("hello");
//


// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;
//
// for (i=0; i<=largest; i++){
//     if (array[i] > largest) {
//         var largest = array[i];
//     }
// }

//console.log(largest);

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = 0;
//
// for (var i = 0; i <= arr.length; i++) {
//     if (arr[i] > largest  ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);


//without spread operator
// var arr = [2, 4, 8, 6, 0];
// function max(arr) {
//   return Math.max.apply(null, arr);
// }
// console.log(max(arr));
// // 8


//with spread operator
// var arr = [2, 4, 8, 6, 0];
// var max = Math.max(...arr);
// console.log(max);
// // 8

//Array to string

// var str = "hello";
// var s = "world"
// var s1 = "how"
// var chars = [s, ...str];
// console.log(chars);
// // ['h', 'e',' l',' l', 'o']

// var middle = [3, 4];
// var arr = [1, 2, middle, 5, 6];
// console.log(arr);
// // [1, 2, [3, 4], 5, 6]

// var middle = [3, 4];
// var arr = [1, 2, ...middle, 5, 6];
// console.log(arr);
// // [1, 2, 3, 4, 5, 6]


// var arr = ['a', 'b', 'c'];
// var arr2 = [a, ...arr];
// console.log(arr2);
// // ['a', 'b', 'c']

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }

//Since theArgs is an array, a count of its elements is given by the length property:
// function fun1(...theArgs) {
//   console.log(theArgs.length);
// }
//
// fun1();  // 0
// fun1(5); // 1
// fun1(3.4, 5);
// fun1(5, 6, 7); // 3

// a rest parameter is used to collect all arguments after the first one in an array. Each one of them is then multiplied by the first parameter and the array is returned:
// function multiply(multiplier, ...theArgs) {
//   return theArgs.map(function(element) {
//     return multiplier * element;
//   });
// }
//
// var arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]


// var n=0;
// var x=0;
// var numbers=[1, 2, 3, 4];
// while (n < numbers.length) {
//       if (n % 2 == 0) {
//           return x * 2;
//       } else {
//           return x * 3;
//       }
//   }
//   n++;


//arrow function
  //return nums.map( (n) => {return n % 2 == 0 ? n*2 : n*3} )


//
// function f(...[a, b, c]) {
//   return a + b + c;
// }
//
// f(1)          // NaN (b and c are undefined)
// f(1, 2, 3)    // 6
// f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)


// function myFunction(x, y, z) { }
// var args = [0, 1, 2];
// myFunction.apply(null, args);
// console.log(args);

// function myFunction(x, y, z) { }
// var args = [0, 1, 2];
// myFunction(...args);


// function myFunction(v, w, x, y, z) { }
// var args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);


// var dateFields = [1970, 0, 1];  // 1 Jan 1970
// var d = new Date(...dateFields);



// function applyAndNew(constructor, args) {
//    function partial () {
//       return constructor.apply(this, args);
//    };
//    if (typeof constructor.prototype === "object") {
//       partial.prototype = Object.create(constructor.prototype);
//    }
//    return partial;
// }
//
//
// function myConstructor () {
//    console.log("arguments.length: " + arguments.length);
//    console.log(arguments);
//    this.prop1="val1";
//    this.prop2="val2";
// };
//
// var myArguments = ["hi", "how", "are", "you", "mr", null];
// var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);
//
// console.log(new myConstructorWithArguments);
// // (internal log of myConstructor):           arguments.length: 6
// // (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// // (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}


// var arr = [1, 2, 3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr2);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected


// var a = [[1], [2], [3]];
// var b = [...a];
// b.shift().shift(); // 1
// console.log(b);
// console.log(a);
// Now array a is affected as well: [[], [2], [3]]


//A better way to concatenate arrays
//with concat method
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// // Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);
// console.log(arr1);


//A better way to concatenate arrays
//concating using spread operator
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1 = [...arr1, ...arr2];
// console.log(arr1);






// function second_highest(arr)
// {
//   var second_highest = arr.sort(function(a, b) { return b - a; })[1];
//   return second_highest;
//
// }
