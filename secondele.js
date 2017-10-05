function getSecondLargest(nums) {
  // Complete the function

  //console.log(nums.length);

  let largest = 0;

  // Get the largest first
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  // Loop thru subtracting 1 from each pass
  var j = 1;
  while (j < largest) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] == largest - j) {
        return nums[i];
      }
    }
  }

  console.log("hello");
  //arr = arr.sort(function(a,b) { return a-b; });
  //console.log(nums);
  //nums.sort();
  //console.log(nums[1]);
}
getSecondLargest(2, 3, 6, 6, 5);

// nt numbers[] = {6,3,37,12,46,5,64,21};
// int highest = 0;
//  int second_highest = 0;
//
// for(int n:numbers){
//
// if(highest < n){
//
//       second_highest = highest;
//       highest =n;
//
//  } else if(second_highest < n){
//
//                 second_highest = n;
//
// }
//
// }
//         System.out.println("First Max Number: "+highest);
//         System.out.println("Second Max Number: "+second_highest);
//
//
//  }

// int numbers[] = {6,3,37,12,46,5,64,21};
//
//   Arrays.sort(numbers);
//
//   System.out.println("Largest Number: "+numbers[numbers.length-1]);
//   System.out.println("Second Largest Number: "+numbers[numbers.length-2]);
//  }

// #include <stdio.h>
//
// int main()
//
// {
// int a[10], n;
//
// int i;
//
// printf("enter number of elements you want in array");
//
// scanf("%d", &n);
//
// printf("enter elements");
//
// for (i = 0; i < n; i++) {
//     scanf("%d", &a[i]);
// }
//
// int largest1 = a[0],largest2 = a[0];
//
// for (i = 0; i < n; i++)
// {
//     if (a[i] > largest1)
//     {
//          largest2=largest1;
//          largest1 = a[i];
//     }
// }
//
// printf("First and second largest number is %d and %d ", largest1, largest2);
// }
