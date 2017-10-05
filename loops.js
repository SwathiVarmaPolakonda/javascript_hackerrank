//For loop
// function main(input) {
//     for (var i = 1; i <= input; i++) {
//         process.stdout.write(i + " ");
//     }
// }
// main(10);
// console.log("hello");


// function main(input) {
//     var i = 1;
//
//     for (; i <= input; i++) {
//         console.log(i + " ");
//     }
// }
// console.log("hello");


// function main(input) {
//
//     for (var i = 1;; i++) {
//         if (i > input) {
//             break;
//         }
//
//         console.log(i + " ");
//     }
// }
// console.log("hello");


//for-in
var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
};

for (var property in actress) {
    console.log("actress " + property + " = " + actress[property]);
}
