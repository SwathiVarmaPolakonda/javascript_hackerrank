'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
var input_stdin_array = [4,-1,10,16,18];

function readLine() {
    return input_stdin_array[input_currentline++];
}


// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

//process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
//});

function readLine() {
    return inputString[currentLine++];
}


function getSecondLargest(nums) {


    //var arr = [2, 3, 6, 6, 5];
var largest = 0;

for (var i = 0; i <= nums.length; i++) {
    if (nums[i] > largest  ) {
        largest = nums[i];
    }
}
console.log(largest);
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    //var T=parseInt(readLine());

    console.log(getSecondLargest(nums));
}
//main()
