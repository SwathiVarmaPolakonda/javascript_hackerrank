//Template literals

//Multi-line string
//(1) example - print a muli-line string normal string
// console.log("first line\n" + "second line");
// console.log("first line" + "\nsecond line");
// console.log("first line\nsecond line");


//(2) example - print a Multi-line string using Template Literals
// console.log(`first line
// second line`);


//Expression Interpolation

// (1) print a line using normal string
// const a = 2;
// const b = 3;
// console.log(
//   'The sum of a and b is ' + (a + b) + '.\n'
//   + 'The product of a and b is ' + (a * b) + '.'
// );

//(2) print a line uing Template Literals
// const a = 2;
// const b = 3;
// console.log(`The sum of a and b is ${a + b}.
//   The product of a and b is ${a * b}.`);


//Tagged Template Literals

//(1)
// var a = 5;
// var b = 10;
// function foo(strings, ...values) {
//   console.log("." + strings[0] + ".");
//   console.log("." + strings[1] + ".");
//   console.log("." + strings[2] + ".");
//   console.log("." + strings[3] + ".");
// }
// foo`Sum ${a + b}
// Product ${a * b}
// Division ${b / a}`;


//(2)
var a = 5;
var b = 10;
function foo(strings, ...values) {
  let a = values[0];
  let b = values[1];
  return `Sum ${a + b}
  Product ${a * b}
  Division ${b / a}`;
}
console.log(foo`Num1 ${a + 10}
  Num2 ${b * 2}
  Num3 ${b / a}`);
