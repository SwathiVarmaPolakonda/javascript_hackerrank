'use strict';

var _input = '100 80';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        )
    }
}


class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }
    /*
    *   Class Constructor
    *
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
   calculate() {
            var sum = this.scores.reduce(function(sum, num)
            {
                return sum + num;
            });

            var score = Math.ceil(sum / this.scores.length);
            var grade = "";
            if (90 <= score && score <= 100)
                grade = "O";
            else if (80 <= score && score < 90)
                grade = "E";
            else if (70 <= score && score < 80)
                grade = "A";
            else if (55 <= score && score < 70)
                grade = "P";
            else if (40 <= score && score < 55)
                grade = "D";
            else if (score < 40)
                grade = "T"

            return grade;
        }

}


function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)

    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}

main()
