process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = [1 2 3];
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  //write your code Here
  var numSwaps = 0;
  for (var i = 0; i < n; i++) {
    var temp = 0;
    for (var j = 0; j < n - 1; j++) {
      temp = a[j];
      if (a[j] > a[j + 1]) {
        a[j] = a[j + 1];
        a[j + 1] = temp;
        numSwaps++;
      }
    }
    if (numSwaps == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + numSwaps + " swaps.");
  console.log("First Element:" + a[0]);
  console.log("Last Element:" + a[n - 1]);
}
main();
