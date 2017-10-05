'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
//[3, 4, 9, 8, 15]
//"3, 4, 9, 8, 15"
//"3 4 9 8 15"
//"349815"
let inputString = "5 \n 1 2 3 4 5";
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

function modifyArray(nums) {
 return nums.map((n) => {
      if (n % 2 == 0) {
          return n * 2;
      } else {
          return n * 3;
      }
  });

}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);

    console.log(modifyArray(a).toString().split(',').join(' '));
}
main()














// function modifyArray(nums) {
//    var nums =[3,6,12,9,15];
//     return nums.map( (n) => {
//        if(n % 2 == 0){
//            console.log( n * 2 );
//        }
//         else {
//             console.log( n * 3 );
//         }
//     });
//
// }
// modifyArray(3,6,12,9,15);


//return nums.map( (n) => { return n % 2 == 0 ? n*2 : n*3} )
