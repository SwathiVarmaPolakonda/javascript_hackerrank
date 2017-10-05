function factorial(n) {
        if (n > 1) {
            return n * factorial(n - 1);
        } else {
            return n;
        }
      }
console.log(factorial(3));

//javascript
//
// function processData(input) {
//     //Enter your code here
//     function factorial(n) {
//         if (n > 1) {
//             return n * factorial(n - 1);
//         } else {
//             return n;
//         }
//     }
//     console.log(factorial(input))
// }

// processData(3);
//factorial(3);



//javascript
// function processData(input) {
//
//     function factorial(N) {
//         if (N == 1) return 1;
//         return N * factorial(N-1);
//     }
//
//     console.log(Number(factorial(input)));
//
// }
//processData(3);

//
// // c++
// int factorial(int n){
//     return (n == 1 ? n : n * factorial(n - 1));
// }
//
// //c++
// int factorial(int n)
// {
//     int fact=1;
//     if(n>0)
//         fact=n*factorial(n-1);
//     return fact;
// }
//
//
//
// return (n > 1) ? n * factorial(n - 1) : 1;
//
//
//
// while (n > 1) {
//     return n * factorial(n -1);
// }
// return 1;
//
//
// //c#
// static int factorial(int n) {
//         // Complete this function
        // if (n == 1)
        //     return 1;
        // else
        //     return n * factorial(n - 1);
//     }
