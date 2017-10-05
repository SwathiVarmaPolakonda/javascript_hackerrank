process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "3";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////




function factorial(n) {
  // Complete this function
  if (n == 1){
    return 1;
  } else {
    return n * factorial(n-1);
  }

}



function main() {
  var n = parseInt(readLine());
  var result = factorial(n);
  process.stdout.write("" + result + "\n");
}
main()

// 1.
// function factorial(n) {
//   // Complete this function
//
//   if (n > 1) {
//             return n * factorial(n - 1);
//         } else {
//             return n;
//         }
// }

// 2.
// function factorial(n) {
//   // Complete this function
//
//   if (n == 1) return 1;
//         return n * factorial(n-1);
// }

// 3.
// function factorial(n) {
//   // Complete this function
//
// return (n == 1 ? n : n * factorial(n - 1));
// }

// 4.
// function factorial(n) {
//   // Complete this function
//
//   var fact=1;
//      if(n > 0)
//         fact = n * factorial(n-1);
//      return fact;
// }


// 5.
// function factorial(n) {
//   // Complete this function
//
//
//       if (n < 0) {
//           return -1;
//       }
//     //  If the number is 0, its factorial is 1.
//       else if (n == 0) {
//           return 1;
//       }
//     //  Otherwise, call this recursive procedure again.
//       else {
//           return (n * factorial(n - 1));
//       }
// }


// 6.
// function factorial(n) {
//   // Complete this function
//   return n < 2 ? 1 : n * factorial(n - 1);
// }
