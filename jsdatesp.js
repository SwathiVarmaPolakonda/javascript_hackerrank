//The first line contains date1
//The second line contains date2

// 'use strict';
// process.stdin.on('data', function (data) {
//   main(String(data).split("\n"));
// });
//
// function main(input) {
//   var date1 = new Date(input[0]);
//   console.log(date1.toString());
//   console.log(date1.toISOString());
//
//   var date2 = new Date(input[1]);
//   console.log(date2.toString());
//   console.log(date2.toISOString());
// }


// let date = new Date(1987, 1, 3, 12, 34, 56, 789);
// console.log("date: " + date);
// console.log("date.getDate(): " + date.getDate());
// console.log("date.getDay(): " + date.getDay());
// console.log("date.getFullYear():" + date.getFullYear());
// console.log("date.getHours(): " + date.getHours());
// console.log("date.getMilliseconds(): " + date.getMilliseconds());
// console.log("date.getMinutes(): " + date.getMinutes());
// console.log("date.getMonth(): " + date.getMonth());
// console.log("date.getSeconds(): " + date.getSeconds());
// console.log("date.getTime: " + date.getTime());
// console.log("date.getYear(): " + date.getYear());
// console.log("date.togetDateString(): " + date.toDateString());


// function main(input) {
//   let date = new Date(input);
//   console.log("date: " + date);
//   console.log("date.getDate(): " + date.getDate());
//   console.log("date.getDay(): " + date.getDay());
//   console.log("date.getFullYear():" + date.getFullYear());
//   console.log("date.getHours(): " + date.getHours());
//   console.log("date.getMilliseconds(): " + date.getMilliseconds());
//   console.log("date.getMinutes(): " + date.getMinutes());
//   console.log("date.getMonth(): " + date.getMonth());
//   console.log("date.getSeconds(): " + date.getSeconds());
//   console.log("date.getTime: " + date.getTime());
//   console.log("date.getYear(): " + date.getYear());
//   console.log("date.togetDateString(): " + date.toDateString());
// }
// main(1987, 1, 3, 12, 34, 56, 789);


// function getDayName(dateString) {
//     var d = new Date(dateString);
//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
//     var n = weekday[d.getDay()];
//     return n;
// }

//'10/11/2009' - Sunday
//'11/10/2010' - Wednesday

//year, Month, day, hour, minutes, seconds, milliseconds
//var d = new Date(1987, 1, 3, 12, 34, 56, 789);
 var d = new Date(2009, 10, 11, 3, 12, 34, 56, 789); //Wednesday
//var d = new Date(2010, 11, 10, 3, 12, 34, 56, 789);    //Friday
    var days = new Array(7);
//var days = new Array("Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";

    var n = days[d.getDay()];
    console.log(n);
