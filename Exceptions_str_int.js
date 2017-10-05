process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
//var input_stdin_array = "5";
var input_stdin_array = "za";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_std.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var S = readLine();

  // try {
  //   let n = eval(S);
  //   console.log(n);
  // } catch (e) {
  //   console.log("Bad String");
  // }

  try {
    console.log(eval(S));
  } catch (e) {
    console.log("Bad String");
  }

  // try {
  //   var n = parseInt(S) || "Bad String";
  //   console.log(n);
  // } catch (e) {
  //   console.log(e);
  // }
}
main();
