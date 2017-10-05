// javascript
try {
  let n = eval(S);
  console.log(n);
} catch (e) {
  console.log("Bad String");
}

//try{
       // var n = parseInt(S) || "Bad String"
        //console.log(n);
    //}catch(e){
      //  console.log(e);
    //}


//try {
     //   console.log(eval(S));
    //} catch(e) {
      //  console.log("Bad String");
    //}

    

//2
// Hacky way to generate an exception
var i = 1;
try {
    i.toString(parseInt(S) * 0 + 2); // Fails on NaN
    console.log(S);
} catch (err) {
    console.log("Bad String");
}

// 3
S = parseInt(S);
    try {
        new Array(S);
        console.log(S);
    } catch(err) {
        console.log('Bad String');
    }


//4
var S = readLine();
try {
    let N = Number(S);
    N == N || ((e) => { throw e; })("Bad String");
    console.log(N);
} catch(e) {
    console.log(e);
}

//5
var w = parseInt(S);

if(isNaN(w))
  console.log('Bad String');
else
  console.log(w);

//6
function main() {
    var S = readLine();

    try {
        console.log(eval(S));
    } catch(e) {
        console.log("Bad String");
    }
}

//6
function main() { var S = readLine();
try {
    var result = parseInt(S) || "Bad String"
    console.log(result)
}
catch(e){
    console.log(e)
}
}

//7
function main() {
    var S = readLine();
    try{
        if(isNaN(parseInt(S)))
            throw("Bad String");
        else
            console.log(parseInt(S));
    }catch(e){
        console.log(e);
    }
}


//8
console.log(parseInt(S) || "Bad String");
console.log(parseInt(S) || "Bad String");

//java
try{
          int value =Integer.parseInt(S);
          System.out.println(value);
    }catch(Exception e)
 {
   System.out.println("Bad String");
 }


//c#
using System;
Class Solution {
    static void Main(String[] args)
    {
        string S = Console.ReadLine();

        // try and convert, if it fails throw and exception
        try
        {
            Console.WriteLine(int.Parse(S));
        }
        catch (Exception)
        {
            Console.WriteLine("Bad String");
        }
    }
}

//2
try
      {
          Console.WriteLine(int.Parse(S));
      }
      catch (FormatException)
      {
          Console.WriteLine("Bad String");
      }
