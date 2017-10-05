// function factorial(n) {
//         if (n > 1) {
//             return n * factorial(n - 1);
//         } else {
//             return n;
//         }
//       }
// console.log(factorial(3));


//javascript
//     //Enter your code here
    function factorial(n) {
      if (n == 1)
       return 1;
            return n * factorial(n-1);
    }
    console.log(factorial(3));
