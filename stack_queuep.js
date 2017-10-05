function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? true : false;
}

alert(isPalindrome("noon"));

//
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

//

function isPal(word) {
		var word = word.toLowerCase();
		var reverse = word.split('').reverse().join('');
		if (word === reverse) {
			return true;
		}else {
			return false;
		}
	}

  //
  function isPalindrom(str) {
    str = str.toLowerCase();
    if (str.split("").reverse().join("") === str) {
        console.log(str + ' is a palindrome.');
    } else {console.log(str + ' is not a palindrome.'); }
}

//ES6 JavaScript:
class Solution {
  constructor() {
    // Last In First Out
    this.stack = [];
    // First In First Out
    this.queue = [];
  }

  pushCharacter(c) {
    // adds element to the end of array
    this.stack.push(c);
  }

  enqueueCharacter(c) {
    // adds element to the end of array
    this.queue.push(c);
  }

  popCharacter() {
    // this will remove and return the last element
    return this.stack.pop();
  }

  dequeueCharacter() {
    // this will remove and return the first element
    return this.queue.shift();
  }
}

//
function Solution() {
  this.queue = [];
  this.stack = [];
}

Solution.prototype.enqueueCharacter = function(c) {
  return this.queue.push(c);
};
Solution.prototype.dequeueCharacter = function() {
  return this.queue.shift();
};
Solution.prototype.pushCharacter = function(c) {
  return this.stack.push(c);
};
Solution.prototype.popCharacter = function() {
  return this.stack.pop();
};

//
function Solution(){
    var stack = [];
    var queue = [];

    this.pushCharacter = (c) => stack.push(c);
    this.enqueueCharacter = (c) => queue.push(c);
    this.popCharacter = () => stack.pop(); // Edited: stack.shift();
    this.dequeueCharacter = () => queue.shift(); // Edited: stack.pop();

    return this;
}

function Solution(){
  //Write your code here

    this.stack = [];
    this.queue = [];

    this.pushCharacter = function(ch) {
        this.stack.push(ch);
    }

    this.enqueueCharacter = function(ch) {
        this.queue.push(ch);
    }

    this.popCharacter = function() {
        return this.stack.pop(); //pop removes last element
    }

    this.dequeueCharacter = function() {
        return this.queue.shift(); //shift removes first element
    }
}

//
function main(){
    var s = readLine();
    var len=0, isPalindrome=s==s.split('').reverse().join('');
