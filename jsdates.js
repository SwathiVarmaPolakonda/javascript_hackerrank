'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
//'10/11/2009' - Sunday
//'11/10/2010' - Wednesday
//'November 11, 2009' - Sunday
//'December 10, 2010' - Wednesday

let inputString = '10/11/2009';  //Saturday
//let inputString = '11/10/2010';  //Monday

let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getDayName(dateString) {
  let dayName;
    var d = new Date(dateString);
    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");

    // var days = new Array(7);
    // days[0] = "Sunday";
    // days[1] = "Monday";
    // days[2] = "Tuesday";
    // days[3] = "Wednesday";
    // days[4] = "Thursday";
    // days[5] = "Friday";
    // days[6] = "Saturday";
     dayName = days[d.getDay()];
    return dayName;
}

function main() {
    const d = +(readLine());

    for (let i = 0; i < d; i++) {
        const date = readLine();

        console.log(getDayName(date));
    }
}
main()



// main(1987, 1, 3, 12, 34, 56, 789);

//
// function getDayName(dateString) {
//     let dayName;
//     // Write your code here
//     var d = new Date(dateString);
//     var days  = new Array(7);
//     days[0] = "Sunday";
//     days[1] = "Monday";
//     days[2] = "Tuesday";
//     days[3] = "Wednesday";
//     days[4] = "Thursday";
//     days[5] = "Friday";
//     days[6] = "Saturday";
//      dayName = days[d.getDay()];
//     return dayName;
// }
