// function getSecondLargest() {
//   myArray = [2,3,6,6,5];
// //Sorted the array
// myArray.sort(function(a,b){return a > b});
//
// //maximum value is the last value of array
// var lastIndex=myArray.length-1;
//
// var newArray = [];
// for(var i=0;i<myArray.length;i++)
//
// //Insert all the values except the maximum
// if(myArray[i]!==myArray[lastIndex])
// newArray.push(myArray[i]);
//
// var last = newArray[newArray.length - 1];
// console.log(last);
//
// }
console.log("hello");

function getSecondLargest() {
  var nums = [2, 3, 6, 6, 5];
  let largest = 0;

  // Get the largest first
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  console.log("largest");

  // Loop thru subtracting 1 from each pass
  var j = 1;
  while (j < largest) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] == largest - j) {
        return nums[i];
      }
    }
  }
}
//  getSecondLargest([2,3,6,6,5]);
