'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = [10, 14];
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

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */


 function sides(literals, ...expressions) {
   var A = 140;
   var P = 48;
    //  var A = expressions[0];
    //  var P = expressions[1];
    //  console.log(literals[0]);
    //  console.log(literals[1]);
    //  console.log(expressions[0]);
    //  console.log(expressions[1]);
     var s1 = (P + Math.sqrt(Math.pow(P, 2) - (16 * A))) / 4;
     var s2 = (P - Math.sqrt(Math.pow(P, 2) - (16 * A))) / 4;
     return [s1, s2].sort();

    
}
//sides(10, 14);

function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());

    [s1, s2] = [s1, s2].sort();

    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}
main()
