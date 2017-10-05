function main()

{
var a = [2,3,6,6,5];

var i;



for (let i = 0; i < a.length; i++) {
    console.log("elements of array are:", a);
}

var largest1 = a[0], largest2 = a[0];

for (let i = 0; i < n; i++)
{
    if (a[i] > largest1)
    {
         largest2=largest1;
         largest1 = a[i];
    }
}

console.log("second largest number is: ", largest2);
}
console.log("hello");


// Complete the function

  //   var first = 0;
  //   var second = 0;
	// for(let i=0; i<nums.length; i++) {
	// 	if(nums[i] > first) {
	// 		second = first;
	// 		first = nums[i];
	// 	}
	// 	else if (nums[i] > second && nums[i] < first) {
	// 		second = nums[i];
  //
	// 	}
	// }
	// return second;
	// console.log(nums[i]);
