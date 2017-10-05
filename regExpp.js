//RegExp practise 1
//return new RegExp('^([aeiou]).*\\1$');  //w

//let re = new RegExp(/^([aeiou]).*\1$/);  //w
  //  return re;

  // ^[aeiou].*[aeiou]$/  //n
  // ^([aeiou]).*\1$/i    //w

// Let's break down the regular expression (.).*\1:
// step:1 = (.) captures any character.
// step:2 = .* stipulates that the captured character must followed by zero or more occurrences of any character.
// step:3 = \1 is a backreference to the first capture group in our expression (i.e., (.)). It stipulates that the character following whatever we matched in step  must match whatever was captured inside the parentheses in step .

// i - perform case-insensitive matching
// . - Find a single character, except newline or line terminator
// n* - Matches any string that contains zero or more occurrences of n
// n$ - Matches any string with n at the end of it
// 1$ - It matches any string containing exactly one chatacter




// 1. The test Method
//the test() method executes a search for a match b/w a regExp and specified string.
// Returns true or false

//Test whether 'learn' is contained at the very beginning of a string

// var re = /^learn/;
// var str1 = 'learn regular expressions';
// var str2 = 'write regular expressions';
// console.log(re.test(str1));
// console.log(re.test(str2));




// 2. The exec Method
//The exec() method executes a search for a match in a specified string.
//Returns a result array or null

//Match 'quick brown' folowed by 'jumps' ignoring characters in between
//Remember 'brown' and 'jumps'
//Ignore case

// var re = /quick\s(brown).+?(jumps)/ig;
// var str = 'The Quick Brown For Jumps Over The Lazy Dog.';
// var res = re.exec(str);
// console.log(res);
// console.log();

//The result object contains following information:
// 1. [0] is the full string of characters matched
// 2. [1], ...[n] is the parenthesized substring matches, if any. The number of
//possible parenthesized substring is unlimited.
// 3. Index is the 0-based index of the match in the string.
// 4. input is the original string.
// console.log('string of characters matched = ' + res[0]);
// console.log('first parenthesized substring match = ' + res[1]);
// console.log('second parenthesized substring match = ' + res[2]);
// console.log('index of the match = ' + res.index);
// console.log('original string = ' + res.input);


// 3. The match() method retrieves the matches when matching a string aganist a regular expressions
//Find 'Chapter', followed by `$1$` or more umeric characters, followed by a decimal point,
//followed by a zero or more numeric characters, and use a flag to specify that the
//results are *case-insensitive*
// var re = /see (chapter \d+(\.\d)*)/i;
// var str = 'For maore information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3';
// console.log(str.match(re));


// 3. The search() method executes a search for a match between a RegExp and this string object.
// if successful, searc() returns the index of the first match of he regular expression inside the string.
// otherwise, it returns -1.
// const re =/learn/;
// const str1 = 'Today, we\'ll learn about regular expressions'.
// const str2 = 'Tomorrow, we\'ll write regular expressions ' + 'and learn some complex expressions';
// const str3 = 'we\'re all done now!';
// console.log(str1);
// console.log('A search for', re, 'returns', str1.search(re), '\n');
// console.log(str2);
// console.log('A search for', re, 'returns', str2.search(re), '\n');
// console.log(str3);
// console.log('A search for', re, 'returns', str3.search(re));


// 4. split method
// const name = 'Julia Roberts';
// const res = name.split(' ');
//const res = name.split('');
// console.log('The split array:', res);
// console.log('First Name:', res[0]);
// console.log('Last Name:', res[1]);


// 5. Replace method
// const re = /RegExp/;
// const myString = 'We\'re learning about RegExps.';
// const replacementString = 'Regular Expression';
// console.log(myString);
// console.log(myString.replace(re, replacementString));


// Example
// const re = /(.).*\1/;
// const str1 = 'wxyz';
// const str2 = 'wxyzw';
// const str3 = 'wxyzx';
// const str4 = 'wxywz';
// console.log('substring:', str1.match(re));
// console.log('substring:', str2.match(re)[0]);
// console.log('substring:', str3.match(re)[0]);
// console.log('substring:', str4.match(re[0]));

//return new RegExp('^([aeiou]).*\\1$');  //w

//let re = new RegExp(/^([aeiou]).*\1$/);  //w
  //  return re;

//RegExp practise 2
//let re = new RegExp('^(?:Mr|Mrs|Ms|Dr|Er)\\.[a-zA-Z]+$');
//return re;

//Grouping and back reference
// (a): Matches a and remembers the match. These are called capturing groups.
// (?:a): Matches a but does not remember the match. these are called non-capturing groups.
// \n: here n is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression.

//Quantifiers
// a*: Matches the preceding item a, 0 or more times.
// a+: Matches the preceding item a, 1 or more times.
// a?: Matches the preceding item a, 0 or 1 time.
// a{n}: Here n is a positive integer. Matches exactlyn occurances of the preceding item a.
// a{n, }: Here n is positive integer. Matches at least n occurances of the preceding item a.
// a{n, m}: Here n is positive integers. Matches at ;east n and most m occurances of the preceding item a.

//Assertions
// a(?=b): Matches a only if a is followed by b.
// a(?!b): Matches a only if a is not followed by b.




//If the match fails, the exec method returns null (which coerces to false).
// var myRe = /d(b+)d/g;
// var myArray = myRe.exec('cdbbdbsbz');s
// console.log(myArray);
// output = [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]



// var myArray = /d(b+)d/g.exec('cdbbdbsbz');
// equivalent to "cdbbdbsbz".match(/d(b+)d/g);
// console.log(myArray);
// output = [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]

// var myRe = new RegExp('d(b+)d', 'g');
// var myArray = myRe.exec('cdbbdbsbz');
// console.log(myArray);
// output = [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]

// var myRe = /d(b+)d/g;
// var myArray = myRe.exec('cdbbdbsbz');
// console.log('The value of lastIndex is ' + myRe.lastIndex);
// "The value of lastIndex is 5"

// var myArray = /d(b+)d/g.exec('cdbbdbsbz');
// console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);
// "The value of lastIndex is 0"


//Using parenthesized substring matches
// var re = /(\w+)\s(\w+)/;
// var str = 'John Smith';
// var newstr = str.replace(re, '$2, $1');
// console.log(newstr);
// "Smith, John"


//Advanced searching with flags
// var re = /\w+\s/g;
// var re = new RegExp('\\w+\\s', 'g');
// var str = 'fee fi fo fum';
// var myArray = str.match(re);
// console.log(myArray);
// ["fee ", "fi ", "fo "]



//Using special characters to verify input
// var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
//      function testInfo(phoneInput) {
//        var OK = re.exec(phoneInput.value);
//        if (!OK)
//        console.log(phoneInput.value + ' isn\'t a phone number with area code!');
//
//        else
//        console.log('Thanks, your phone number is ' + OK[0]);
//
//      }
//      testInfo('phone');


//RegExp practise 3

//let re = new RegExp(/^([aeiou]).*\1$/);  //w
  //  return re;


// 
// let re = new RegExp('\\d+', 'g');
// return re;

// return new RegExp('\\d+', 'g');
