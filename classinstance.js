// function Person(initialAge){
//
//     // Add some more code to run some checks on initialAge
//     if(initialAge >= 0){
//         let age = initialAge;
//     }
//     else {
//         initialAge = 0;
//         console.log("Age is not valid, setting age to 0.");
//     }
//   this.amIOld=function(){
//    // Do some computations in here and print out the correct statement to the console
//       if(initialAge < 13){
//           console.log("You are young.");
//       }
//       else if(initialAge >=13 && initialAge < 18) {
//           console.log("You are a teenager.");
//       }
//       else {
//           console.log("You are old.");
//       }
//
//
//   };
//    this.yearPasses=function(){
//           // Increment the age of the person in here
//       // initialAge = initialAge + 1;
//        initialAge++;
//    };
// }
//
// Person(-1);
// //amIOld(-1);
//
// Person(10);
// amIOld(10);
//
// Person(15);
// amIOld(15);
//
// Person(20);
// amIOld(20);
//


'use strict';
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = [4,-1,10,16,18];
var input_currentline = 0;


function readLine() {
    return input_stdin_array[input_currentline++];
}


function Person(initialAge){

  // Add some more code to run some checks on initialAge
  if(initialAge >= 0){
      let age = initialAge;
  }
  else {
      initialAge = 0;
      console.log("Age is not valid, setting age to 0.");
  }
this.amIOld=function(){
 // Do some computations in here and print out the correct statement to the console
    if(initialAge < 13){
        console.log("You are young.");
    }
    else if(initialAge >=13 && initialAge < 18) {
        console.log("You are a teenager.");
    }
    else {
        console.log("You are old.");
    }


};
 this.yearPasses=function(){
        // Increment the age of the person in here
    // initialAge = initialAge + 1;
     initialAge++;
 };
}

function main() {

var T=parseInt(readLine());
for(var i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(var j=0;j<3;j++){
        p.yearPasses();

    }
    p.amIOld();
    console.log("");
    }
}
main()
