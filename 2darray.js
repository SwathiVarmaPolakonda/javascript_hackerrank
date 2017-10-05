process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = [1, 1, 1, 4, 0, 4, 0, 1, 0, 0, 4, 0, 1, 1, 1, 4, 0, 4, 4, 0, 2, 2, 2, 0, 0, 4, 0, 2, 0, 0, 4, 0, 2, 2, 2, 0];
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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
  var highestSum = 0;
        for(var i=0; i < 4; i++){
            for(var j=0; j < 4; j++){
                var sum = arr[i+0][j+0] + arr[i+0][j+1] + arr[i+0][j+2]
                                        + arr[i+1][j+1]
                        + arr[i+2][j+0] + arr[i+2][j+1] + arr[i+2][j+2];
                if (sum > highestSum || i==0 && j==0)
                    highestSum = sum;
            }
        }
       console.log(highestSum);
}
main()



// var highestSum = 0;
//         for(var i=0; i < 4; i++){
//             for(var j=0; j < 4; j++){
//                 var sum = arr[i+0][j+0] + arr[i+0][j+1] + arr[i+0][j+2]
//                                         + arr[i+1][j+1]
//                         + arr[i+2][j+0] + arr[i+2][j+1] + arr[i+2][j+2];
//                 if((i==0)&&(j==0))
//                 highestSum=sum;
//          if(highestSum<sum)
//              highestSum=sum;
//             }
//         }
//        console.log(highestSum);
