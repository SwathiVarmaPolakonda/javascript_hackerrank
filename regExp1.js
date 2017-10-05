'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

// let inputString = 'bcd';
// let inputString = 'abcd';
// let inputString = 'abcda';
// let inputString = 'abcdo';

let inputString = 'abcda';
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

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */


    /*
     * Do not remove the return statement
     */
    //let re = new RegExp(/^([aeiou]).*\1$/i);
    let re = new RegExp(/^([aeiou]).*\1$/);
    //let re = new RegExp('^([aeiou]).*\\1$');
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();

    console.log(re.test(s));
}
main()

// * - Matches the preceding expression 0 or more times. Equivalent to {0,}.

// $ - Matches the end of input.
