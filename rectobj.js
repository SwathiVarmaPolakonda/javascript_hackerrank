'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;



function readLine() {
    return inputString[currentLine++];
}

function Rectangle(a, b) {
  var length = a;
  var width = b;
    this.length = a;
    this.width = b;


    var perimeter1 = 2 * (a+ b);
    this.perimeter = perimeter1
    //console.log(perimeter);

    var area1 = a * b ;
     this.area = area1;
    //console.log(area);



}
//Rectangle(4,5);



function main() {
    const a = +(readLine());
    const b = +(readLine());


    const rec = new Rectangle(a, b);

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}
main()
