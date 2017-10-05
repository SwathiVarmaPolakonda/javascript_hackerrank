'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '2-1 20';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function isPositive(a){

    if(a > 0) {
         return "YES";
    } else if (a === 0) {
        throw ({message: "Zero Error"});
    } else if (a < 0) {
        throw ({message: "Negative Error"});
    }


//return "YES";
}

function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}
main()
