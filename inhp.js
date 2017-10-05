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
    var sum = this.scores.reduce(function(sum, num) {
      return sum + num;
    });

    var score = Math.ceil(sum / this.scores.length);
    var letter = "";
    if (90 <= score && score <= 100) letter = "O";
    else if (80 <= score && score < 90) letter = "E";
    else if (70 <= score && score < 80) letter = "A";
    else if (55 <= score && score < 70) letter = "P";
    else if (40 <= score && score < 55) letter = "D";
    else if (score < 40) letter = "T";

    return letter;
  }
}

// class Student extends Person {
//     constructor(firstName, lastName, id, scores) {
//         super(firstName, lastName, id);
//         this.scores = scores;
//     }
//     /*
//     *   Class Constructor
//     *
//     *   @param firstName - A string denoting the Person's first name.
//     *   @param lastName - A string denoting the Person's last name.
//     *   @param id - An integer denoting the Person's ID number.
//     *   @param scores - An array of integers denoting the Person's test scores.
//     */
//     // Write your constructor here
//
//     /*
//     *   Method Name: calculate
//     *   @return A character denoting the grade.
//     */
//     // Write your method here
//     calculate() {
//         let avg = this.scores.reduce((a, b) =>a + b) / this.scores.length;
//
//     if(avg<40) return 'T';
//     else if(avg>=40 &&  avg<55) return 'D';
//     else if(avg>=55 &&  avg<70) return 'P';
//     else if(avg>=70 &&  avg<80) return 'A';
//     else if(avg>=80 &&  avg<90) return 'E';
//     else return 'O';
//     }
//
// }
