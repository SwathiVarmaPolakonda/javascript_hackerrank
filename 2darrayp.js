



process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = [1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
];
var input_stdin_array = "";
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
    let arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var highestSum = 0;
          for(var i=0; i < 4; i++){
              for(var j=0; j < 4; j++){
                  var sum = arr[0+i][0+j] + arr[0+i][1+j] + arr[0+i][2+j]
                                          + arr[1+i][1+j]
                          + arr[2+i][0+j] + arr[2+i][1+j] + arr[2+i][2+j];
                          //if (sum > highestSum || i === 1 && j === 1)
                  if (sum > highestSum || i==0 && j==0)
                      highestSum = sum;
              }
          }
         console.log(highestSum);

}
main(1,1,1,2);


// var maxSum = 0;
//     //row
//     // maybe go to center of shape then move?
//     // start off at
//     for (var i = 1; i < arr.length-1; i++)
//     {
//         //column
//         // we start off at center of hourglass shape
//         for (var j = 1; j < arr[i].length-1; j++)
//         {
//             // our hourglass shape
//             //center
//             var center = arr[i][j];
//             //top
//             var top = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1];
//             //bottom
//             var bottom = arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
//
//             //get the total
//             var total = center + top + bottom;
//
//             // check if total is greater than current max seen
//             // set the maxSum to total if we're just starting off
//             if (total > maxSum || (i === 1 && j === 1))
//                 maxSum = total;
//         }
//     }
//
//     console.log(maxSum);


    // newSum = [];
    // for (i = 0; i < 4; i++) {
    //     for (j = 0; j < 4; j++) {
    //         sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
    //         newSum.push(sum);
    //     }
    // }
    // newSum.sort(function(a, b){
    //     return b-a
    // })
    //    console.log(newSum[0]);
    // }


    // int highestSum = 0;
    //     for(int i=0; i < 4; i++){
    //         for(int j=0; j < 4; j++){
    //             int sum = arr[0+i][0+j] + arr[0+i][1+j] + arr[0+i][2+j]
    //                                     + arr[1+i][1+j]
    //                     + arr[2+i][0+j] + arr[2+i][1+j] + arr[2+i][2+j];
    //             if (sum > highestSum || i==0 && j==0) highestSum = sum;
    //         }
    //     }
    //     System.out.println(highestSum);



// function glass(arr){
// 	var a=0;
// 	var b=6*6*-9;
//
// 	for(i=0;i<4;i++){
// 		for(j=0;j<4;j++){
// 			for(x=i;x<i+3;x++){
// 				if(x==i || x==i+2){
// 				for(y=j;y<j+3;y++){
// 					a+=Number(arr[x][y]);
//
// 				}
// 			}else if(x==i+1){
// 				a+=Number(arr[x][j+1]);
// 			}
// 			}
// 			if(a>b){
// 			b=a;
// 		}
// 		a=0;
// 		}
// 	}
// 	return b;
// }
// console.log(glass(arr));




// public static void main(String[] args) {
//     Scanner in = new Scanner(System.in);
//     int arr[][] = new int[6][6];
//     for(int i=0; i < 6; i++){
//         for(int j=0; j < 6; j++){
//             arr[i][j] = in.nextInt();
//         }
//     }
//
//     int max= 0;
//     for(int i=0;i<4;i++)
//     {
//         for(int j=0;j<4;j++)
//         {
//         int sum=arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
        //     if((i==0)&&(j==0))
        //         max=sum;
        //  if(max<sum)
        //      max=sum;
//         }
//     }
//     System.out.println(max);
// }



//c++
// int max_sum = 0;
//     int temp_sum;
//     for(int i = 0; i < 4; i++) {
//         for(int j = 0; j < 4; j++) {
//             temp_sum = 0;
//             // top row
            // temp_sum += arr[i][j];
            // temp_sum += arr[i][j+1];
            // temp_sum += arr[i][j+2];
//             //middle
            // temp_sum += arr[i+1][j+1];
//             //bottom row
            // temp_sum += arr[i+2][j];
            // temp_sum += arr[i+2][j+1];
            // temp_sum += arr[i+2][j+2];
//
//             //if first hourglass, set as max
            // if(temp_sum > max_sum || i == 0 && j == 0)
            //     max_sum = temp_sum;
//         }
//     }
//     cout << max_sum;



// int max = result[0];
//         for(int i=1; i < result.length; i++){
//             if(result[i] > max)
//                max = result[i];
//         }
//         System.out.println(max);


//javascript
        // function main() {
        //     var arr = [];
        //     for(arr_i = 0; arr_i < 6; arr_i++){
        //        arr[arr_i] = readLine().split(' ');
        //        arr[arr_i] = arr[arr_i].map(Number);
        //     }
        //
        //     //setting highestSum initially to -63 because that is lowest possible outcome for hourglass.
        //     //-9 -9 -9
        //     //   -9
        //     //-9 -9 -9
        //     // = -63
        //     var highestSum = -63;
        //     var tempSum = 0;
        //     for(let i = 0; i < 4; i++) {
        //         for(let j = 0; j < 4; j++) {
        //             tempSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        //             if(tempSum > highestSum) {
        //                 highestSum = tempSum;
        //             }
        //         }
        //     }
        //
        //     console.log(highestSum);
        // }

        //2

        // let total = -63;
        // for (let i=0; i < arr.length-2; i++) {
        //     for (let j=0, curSum = 0; j < arr[i].length-2; j++) {
        //         curSum = arr[i][j] +
        //                  arr[i][j+1] +
        //                  arr[i][j+2] +
        //                  arr[i+1][j+1] +
        //                  arr[i+2][j] +
        //                  arr[i+2][j+1] +
        //                  arr[i+2][j+2];
        //         if (curSum > total) total = curSum;
        //     }
        // }
        // console.log(total);
