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
       //var n,max,x;
       var max,x;
    max=0;
    var count=0;

    while(n>0)
    { x=n%2;
      n=Math.floor(n/2);
     if(x==1)
     {
         count++;
     }
     else{
         if(count>max)
         {
             max=count;
         }
         count=0;
     }


    }
    if(max>=count){
        console.log(max)
    }
    else
    {
        console.log(count);
    }
   return 0;

}
main()
