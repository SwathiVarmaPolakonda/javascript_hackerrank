// function main() {
//   var input = "HacerRank";
//   console.log("\"" + input + "\"");
//   console.log('\'' + input + '\'');
//   console.log(input.length);
// }
// console.log("hello");

//String Constructor
// var myNumber = 4;
// var myString = String(myNumber);
// var str = "abcd";
// console.log(myNumber + " is a " + typeof myNumber);
// console.log(myString + " is a " + typeof myString);
// console.log(str + " is a " + typeof str);


//String Methods

//charAt()
// var str = "HELLO WORLD";
//     console.log(str.charAt(0));
//     console.log(str.charAt(4));
//     console.log(str.charAt(5));
//     console.log(str.charAt(8));


//String.concat()
// var a = "Hacker";
// var b = "Rank";
// var c = a.concat(b);
// console.log(a +" " + b);
// console.log(c);


//String.includes()
// var s = "HackerRank";
// console.log(s.includes() + " " + s.includes(""));
// console.log(s.includes("Hack") + " " + s.includes("hack"));
// console.log(s.includes("erRa") + " " + s.includes("ank"));
// console.log(s.includes("hacker") + " " + s.includes("rank"));
// console.log(s.includes(" "));


//String.endsWith()
// var s= "HackerRank";
// console.log(s.endsWith() + " " + s.endsWith(""));
// console.log(s.endsWith("rank") + " " + s.endsWith("Rank"));
// console.log(s.endsWith("k"));


//String.indexOf()
// var s = "HackerRank";
// console.log(
//   s.indexOf("a") + " "
//   + s.indexOf("a", s.length) + " "
//   + s.indexOf("a", 6)
// );
// console.log(
//   s.indexOf("an") + " "
//   +s.indexOf("x") + " "
//   +s.indexOf("")
// );


//String.lastIndexOf()
// var s = "HackerRank";
// console.log(
//   s.lastIndexOf("a") + " "
//   + s.lastIndexOf("a", s.length) + " "
//   + s.lastIndexOf("a", 6)
// );
// console.log(
//   s.lastIndexOf("ac") + " "
//   + s.lastIndexOf("x") + " "
//   + s.lastIndexOf("")
// );


//String.match()
// var s ="HackerRank";
// console.log(s.match());
// console.log(s.match("[a-z]+"));
//
// var p ="abcD";
// console.log(p.match());
// console.log((p.match("[a-z][A-Z]+")));


//String.repeat()
// var s = "HackerRank";
// console.log(s.repeat () + "x" + s.repeat(0));
// console.log(s.repeat(2));


//String.replace()
// var s = "HackerRank";
// console.log(s.replace() + " " + s.replace("a", ""));
// console.log(s.replace() + " " + s.replace("c", "z"));
// console.log(s.replace() + " " + s.replace("a", ""));


//String.search()
// var s = "HackerRank";
// console.log(s.search() + " " + s.search("[a-z]"));
// console.log(s.search("R") + " " + s.search("[c-r]"));
// console.log(s.search("a") + " " + s.search("an"));
// console.log(s.search("k") + " " + s.search("er"));


//String.slice()
// var s = "HackerRank";
// console.log(s.slice(0, 6) + " " + s.slice(6));
// console.log(
//   s.slice() + " "
//   + s.slice(-4, 8) + " "
//   + s.slice(-4, -2)
// );
// console.log(s.slice(4));
// console.log(s.slice(3,5));
// console.log(s.slice(-4, 9));


//String.split()
// var s = "HackerRank";
// console.log(s.split(""));
// console.log(s.split("k"));
// console.log(s.split());


//String.startsWith()
// var s = "HackerRank";
// console.log(s.startsWith("Hack"));
// console.log(s.startsWith("Hacks"));
// console.log(s.startsWith("H"));
// console.log(s.startsWith("Hc"));

//String.substr()
// var s = "HackerRank";
// console.log(s.substr());
// console.log(s.substr(0, 6) + " " + s.substr(6));

//String.substring
// var s = "HackerRank";
// console.log(s.substring());
// console.log(s.substring(0, 6) + " " + s.substring(6));
// console.log(s.substring(6));


//String.toLowerCase()
// var s = "HackerRank";
// s = s.toLowerCase();
// console.log(s);


//String.toUpperCase()
// var s = "HackerRank";
// s = s.toUpperCase();
// console.log(s);


//String.trim()
// var s = " HackerRank  ";
// console.log("Original Length: " + s.length);
// s = s.trim();
// console.log("Trimmed Length: " + s.length);


//String.trimLeft()
// var s = "  HackerRank  ";
// console.log("Original Length: " + s.length);
// s = s.trimLeft();
// console.log("Trimmed Length: " + s.length);


//String.trimRight()
var s = "   HackerRank   ";
console.log("Original Length: " + s.length);
s = s.trimRight();
console.log("Trimmed Length: " + s.length);
