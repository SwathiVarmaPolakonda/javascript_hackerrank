process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "6";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////


function main() {
  var n = parseInt(readLine());
      var rem,max=0,count=0;
  while(n>=1){
      rem = n%2;
      if(rem==1){
          count++;
          if(count>max)
             max=count;
      }
      else
          count=0;
      n=n/2;
  }
  console.log(max);

    }
    main()



    // function main() {
    //     var n = parseInt(readLine());
    //        var n,max,x;
    //     max=0;
    //     var count=0;
    //     
    //     while(n>0)
    //     { x=n%2;
    //       n=Math.floor(n/2);
    //      if(x==1)
    //      {
    //          count++;
    //      }
    //      else{
    //          if(count>max)
    //          {
    //              max=count;
    //          }
    //          count=0;
    //      }
    //
    //
    //     }
    //     if(max>=count){
    //         console.log(max)
    //     }
    //     else
    //     {
    //         console.log(count);
    //     }
    //    return 0;
    //
    // }



// var i= 0;
// var dnum=0;
// var r;
// var bnum=0;
// while(dnum!=0){
//   r= dnum%2;
//   bnum = bnum +r * Math.pow(10, 2);
//
//   i++;
//   dnum+dnum%2;
// }
// console.log(bnum);



// function main() {
//     var n = parseInt(readLine());
//         //var rem,max=0,count=0;
//     var counter = 0, max =0;
// while (n > 0) {
//     var rem = n%2;
//     if (rem==1) counter++;
//     else counter=0;
//     max = Math.max(counter, max);
//     n/=2;
// }
// console.log(max);
//
//     }


// function main() {
//     var n = parseInt(readLine());
//         //var rem,max=0,count=0;
//       var counter = 0, maxcount = 0;
//         while(n > 0){
//             if(n%2 == 1){
//                 counter++;
//                 maxcount = counter > maxcount ? counter : maxcount;
//             }else{
//                 counter = 0;
//             }
//             n /= 2;
//         }
//         console.log(maxcount);
//
//     }
