// var arr = new Array(0,1,2,3,4);
// var reverseArr = arr.reverse();
//
// console.log(reverseArr);


// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
//
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
//
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
//
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
// reverseString("hello");


// function reverseString(str) {
//     //return str.split("").reverse().join("");
//     console.log(str.split("").reverse().join(""));
// }
// reverseString("hello");



// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString);
//     //return newString;
// }
// reverseString('hello');



// function reverseArr(input) {
//     var ret = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     //return ret;
//     console.log(ret);
// }
// var a = [3,5,7,8]
// var b = reverseArr(a);



// var myArray = [1,2,3,4,5,6,7,8];
// var revMyArr = [].concat(myArray).reverse();
// console.log(revMyArr);



//
// var a = [3, 5, 7, 8];
// var arr = [];
// function reverse(args) {
//   console.log(args.length);
//   for (var i = args.length - 1; i >= 0; i--) {
//     arr.push(a[i]);
//   }
//   //return arr;
//   console.log(arr);
// }
// reverse(a);
//console.log(reverse(a));



// var x = [-3,5,1,3,2,10];
// function reverse(a) {
//   var counter = a.length - 1;
//   for (var i = 0; i < a.length; i++) {
//     var temp = a[i];
//     a[i] = a[counter];
//     counter--;
//   }
//   //return a;
//   console.log(a);
// }
// reverse(x);
//console.log(reverse(x)); // returns [10, 2, 3, 3, 2, 10]


  //  var arr = [0, 1, 2, 3].reverse();
  //  document.write("Reversed array is : " + arr );
  //  console.log("Reversed array is : " + arr );


//   var arr = [0, 1, 2, 3];
// console.log(arr.reverse().join(' '));

//   var arr = [0, 1, 2, 3];
// console.log(arr.reverse().toString().replace(/,/g,' '));
