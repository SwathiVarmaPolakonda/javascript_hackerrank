// //Create a Map of String Keys to String Values, implemented by the HasMap class
// Map<String,String> myMap = new HashMap<String,String>();
//
// //Adds ("Hi", "Bye") mapping to myMap
// myMap.put("Hi", "Bye");
//
// //Print the Value mapped to from "Hi"
// console.log(myMap.get("Hi"));
//
// //Replaces "Bye" maping from "Hi" with "Bye!"
// myMap.put("Hi", "Bye!");
//
// //Print the Value mapped to from "Hi"
// console.log(myMap.get("Hi"));






//javascript
//111
// var inArr = input.split("\n");
// var length = Number(inArr[0]);
// inArr.shift();
// var people = {};
// while(length > 0){
//     var temp = inArr[0].split(" ");
//     people[temp[0]] = temp[1];
//     length--;
//     inArr.shift();
// }
// var match = false;
//
// while(inArr.length>0){
//     if(inArr[0] === ''){
//         inArr.shift();
//         continue;
//     }
//     for (key in people){
//         if(inArr[0] === key){
//             match = true;
//             console.log(key+"="+people[key]);
//         }
//     }
//     if (match === false){
//         console.log("Not found");
//     }
//     match = false;
//     inArr.shift();
// }


///222
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
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
    var n = parseInt(readLine());

    pbookname = [];
    pbooknums = [];
    query = [];

    for (i=0; i<n; i++) {
         pbook = [];
         pbook = readLine().split(' ');
         pbookname.push(pbook[0])
         pbooknums.push(pbook[1]);
    }

    for (j=i; j<n*2; j++) {
        if (readLine != "") {
            query = readLine();
            pos = pbookname.indexOf(query);
            if (pos < 0) {
                console.log("Not found");
            } else {
                console.log(query +"="+ pbooknums[pos]);
            }
        } else {
            break;
        }
    }

    /*
    console.log("Names " + pbookname);
    console.log("Numbers " + pbooknums);
    console.log("Queries " + query);
    */
}


////3333

//  function processData(input) {
//     var temp = input.split('\n');
//     var n = temp.shift();
//     var arr = [];
//     var book = {};
//     for (i = 0; i < n; i++) {
//         arr[0] = (temp.shift().split(' '));
//         book[arr[0][0]] = arr[0][1];
//     }
//     for (a = 0; a < temp.length; a++) {
//         if (book.hasOwnProperty(temp[a])) {
//             console.log(temp[a] + '=' + book[temp[a]]);
//         } else {
//             console.log('Not found');
//         }
//     }
// }


///4444
// function processData(input) {
//     input = input.split('\n')
//     var N = parseInt(input[0])
//
//     var phonebook = []
//     for (var k = 0; k< N; k++){
//         var line = input[k+1]
//         line = line.split(' ')
//         phonebook[line[0]] = line[1]
//     }
//
//     for (var k = N+1; k < input.length; k++ ){
//         var num = (phonebook[input[k]])
//         if (num !== undefined){
//             console.log(input[k]+'='+num)
//         } else {
//             console.log('Not found')
//         }
//     }
//
// }


///555
// function processData(input){
// var n=parseInt(readLine()); //no. of entries
// var dict = { }; //defining dictionary
//
// //creating phonebook
// for (i=0; i<n; i++){
//     var temp_input=readLine().split(" ");
//     dict[temp_input[0]] = temp_input[1];
// }
//
// //checking entries
// for (i=n; i<input_length-1; i++){
//     if(dict[input[i+1]]){
//         console.log(input[i+1]+"="+dict[input[i+1]])
//     }
//     else {
//         console.log("Not found");
//     }
// }
//
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
//
// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;
// var input_length=0;
//
// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });
//
// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     input_length = input_stdin_array.length;
//     processData(input_stdin_array);
// });
//
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }


///666
// function processData(input) {
//     const lines = input.split('\n').reverse(),
//     num_lines = parseInt(lines.pop(),10);
//
//     let dict = {},
//         entry = "",
//         name = "";
//
//     for(i = 0; i < num_lines; i++) {
//         entry = lines.pop().split(' ');
//         dict[entry[0]] = entry[1];
//     }
//     while(lines.length) {
//         name = lines.pop();
//         if(name in dict) {
//             console.log(name + "=" + dict[name]);
//         } else {
//             console.log("Not found");
//         }
//     }
// }


///777

// function processData(input) {
//     input = input.split('\n')
//     var N = parseInt(input[0])
//
//     var phonebook = []
//     for (var k = 0; k< N; k++){
//         var line = input[k+1]
//         line = line.split(' ')
//         phonebook[line[0]] = line[1]
//     }
//
//     for (var k = N+1; k < input.length; k++ ){
//         var num = (phonebook[input[k]])
//         if (num !== undefined){
//             console.log(input[k]+'='+num)
//         } else {
//             console.log('Not found')
//         }
//     }
// }
//
//
// // IGNORE
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
// processData(_input);
// });




///c#
// class Solution {
//     static void Main(String[] args)
//     {
//         int N = Convert.ToInt32(Console.ReadLine());
//         Dictionary<string, int> phoneBook = new Dictionary<string, int>(N);
//         for (int i = 0; i < N; i++)
//         {
//             string[] temp = Console.ReadLine().Split(' ');
//             if (temp[1].Length == 8)
//             {
//                 phoneBook.Add(temp[0], Convert.ToInt32(temp[1]));
//             }
//         }
//         string nameToSearch = "";
//         while ((nameToSearch = Console.ReadLine()) != null)
//         {
//             int flagFound = 0;
//             if (nameToSearch != "")
//             {
//                 if (phoneBook.ContainsKey(nameToSearch))
//                 {
//                     flagFound = 1;
//                 }
//             }
//             if (flagFound == 1)
//             {
//                 Console.WriteLine(nameToSearch + "=" + phoneBook[nameToSearch]);
//             }
//             else
//             {
//                 Console.WriteLine("Not found");
//             }
//         }
//     }
// }
