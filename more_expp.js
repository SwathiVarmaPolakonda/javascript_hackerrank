function Calculator() {
  this.power = function(n, p) {
    try {
      if (n < 0 || p < 0) throw "n and p should be non-negative";
      console.log(Math.pow(n, p));
    } catch (e) {
      console.log(e);
    }
  };
}

Calculator(3, 5);
power(3, 5);

// Calculator(2, 4);
// power(2, 4);

// Calculator(-1, -2);
// power(-1, -2);

// Calculator(-1, 3);
// power(-1, 3);

// function factorial(n) {
//   if (n == 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(3));
//1
// function Calculator() {
//   this.power = function(n, p) {
//     try {
//       if (n < 0 || p < 0) throw "n and p should be non-negative";
//       return Math.pow(n, p);
//     } catch (e) {
//       throw e;
//     }
//   };
// }

//2
//Write your code here
// class Calculator {
//   power(base, power) {
//     // both numbers should be positive
//     var b = eval(base);
//     var p = eval(power);
//
//     if (b < 0 || p < 0) {
//       throw "n and p should be non-negative";
//     }
//
//     //using math class since submission doesn't support: **
//     return Math.pow(b, p);
//   }
// }

//3
//Write your code here
// function Calculator() {
//   this.power = function(n, p) {
//     try {
//       if (n < 0 || p < 0) throw "n and p should be non-negative";
//       return Math.pow(n, p);
//     } catch (e) {
//       throw e;
//     }
//   };
// }

//4
// var Calculator = function() {
//   this.power = function(n, p) {
//     try {
//       if (n < 0 || p < 0) {
//         throw "n and p should be non-negative";
//       } else {
//         return Math.pow(n, p);
//       }
//     } catch (err) {
//       return err;
//     }
//   };
// };
