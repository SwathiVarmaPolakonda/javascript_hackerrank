calculate() { var total=0;
    var str;
        for(var i= 0; i<testScores.length;i++)
       {
           total=total+testScores[i];


       }
    var aver= total/testScores.length;
    if(aver>=90&&aver<=100)
    {str='O';
    }
   else if(aver>=80)
    {str='E';
    }
     else if(aver>=70)
    {str='A';
    }
     else if(aver>=50)
    {str='P';
    }
     else if(aver>=40)
    {str='D';
    }
    else
    {
        str='T';
    }
    return str;
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
        constructor(firstName, lastName, id, scores) {
            super(firstName, lastName, id);
            this.scores = scores;
        }
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
            var letter = "";
            if (90 <= score && score <= 100)
                letter = "O";
            else if (80 <= score && score < 90)
                letter = "E";
            else if (70 <= score && score < 80)
                letter = "A";
            else if (55 <= score && score < 70)
                letter = "P";
            else if (40 <= score && score < 55)
                letter = "D";
            else if (score < 40)
                letter = "T"

            return letter;
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
     calculate()    {
         var total;
        if (total >= 90 && total <= 100)
            return 'O';
        else if (total >= 80 && total < 90)
            return 'E';
        else if (total >= 70 && total < 80)
            return 'A';
        else if (total >= 55 && total < 70)
            return 'P';
        else if (total >= 40 && total < 55)
            return 'D';
        else if (total < 40)
            return 'T';
 }

 }





 public char calculate(){
         int avg = 0;
         int sum = 0;
         char grade = '\0';
         for(int i = 0;i<testScores.length;i++){
             sum = sum + testScores[i];
         }
         avg = sum/testScores.length;
        if(avg>=90&&avg<=100)
            grade = 'O';
        if(avg>=80&&avg<90)
            grade = 'E';
        if(avg>=70&&avg<80)
            grade = 'A';
        if(avg>=55&&avg<70)
            grade = 'P';
        if(avg>=40&&avg<55)
            grade = 'D';
        if(avg<40)
            grade = 'T';
         return grade;
     }
 }


 if (total >= 90 && total <= 100)
            return 'O';
        else if (total >= 80 && total < 90)
            return 'E';
        else if (total >= 70 && total < 80)
            return 'A';
        else if (total >= 55 && total < 70)
            return 'P';
        else if (total >= 40 && total < 55)
            return 'D';
        else if (total < 40)
            return 'T';


            public Student(string firstName, string lastName, int id, int[] scores)
     {
         this.firstName = firstName;
         this.lastName = lastName;
         this.id = id;

         this.testScores = scores;
     }
     public char calculate()
    {
          int sum=0;
     for (int i = 0; i < testScores.Length; i++)
     {
         sum = sum + testScores[i];
     }
     int result=sum/testScores.Length;

     if(result<=100 && result >=90)
     {
         return 'O';
     }
      if(result<90 && result>=80)
     {
         return 'E';
     }
      if(result<80 && result >=70)
     {
         return 'A';
     }
      if(result<70 && result >=55)
     {
         return 'P';
     }
      if(result<55 && result >=40)
     {
         return 'D';
     }
     else
         return 'T';

 }


 switch(score){
         case >= 90:
             cout << "O";
             break;
         case >= 80:
             cout << "E";
             break;
         case >= 70:
             cout << "A";
             break;
         case >= 55:
             cout << "P";
             break;
         case >= 40:
             cout << "D";
             break;
         default:
             cout << "T";
             break;
 }


 //constructor
 Student(String fname,String lname,int id,int []score){
        super(fname,lname,id);
        this.testScores=score;
     }



 if (total >= 90 && total <= 100)
            return 'O';
        else if (total >= 80 && total < 90)
            return 'E';
        else if (total >= 70 && total < 80)
            return 'A';
        else if (total >= 55 && total < 70)
            return 'P';
        else if (total >= 40 && total < 55)
            return 'D';
        else if (total < 40)
            return 'T';


            class Student extends Person {
            	private int[] testScores;

                Student(String firstName, String lastName, int id, int[] scores) {
                    super(firstName, lastName, id);
                    testScores = scores;
                }

                char calculate() {
                    int max = 0;
                    for (int score : testScores) max += score;
                    int avg = max/testScores.length;
                    if (avg < 40) return 'T';
                    else if (avg < 55) return 'D';
                    else if (avg < 70) return 'P';
                    else if (avg < 80) return 'A';
                    else if (avg < 90) return 'E';
                    else return 'O';
                }
            }


            public Student(string firstName, string lastName, int id, int[] scores)
     {
         this.firstName = firstName;
         this.lastName = lastName;
         this.id = id;

         this.testScores = scores;
     }
     public char calculate()
    {
          int sum=0;
     for (int i = 0; i < testScores.Length; i++)
     {
         sum = sum + testScores[i];
     }
     int result=sum/testScores.Length;

     if(result<=100 && result >=90)
     {
         return 'O';
     }
      if(result<90 && result>=80)
     {
         return 'E';
     }
      if(result<80 && result >=70)
     {
         return 'A';
     }
      if(result<70 && result >=55)
     {
         return 'P';
     }
      if(result<55 && result >=40)
     {
         return 'D';
     }
     else
         return 'T';

 }



 class Student extends Person{
 	private int[] testScores;



     /*
     *   Class Constructor
     *
     *   @param firstName - A string denoting the Person's first name.
     *   @param lastName - A string denoting the Person's last name.
     *   @param id - An integer denoting the Person's ID number.
     *   @param scores - An array of integers denoting the Person's test scores.
     */
     // Write your constructor here
     Student(String firstName1, String lastName1, int identification1,int[] Scores){
 		super(firstName1,lastName1,identification1);
         testScores= Scores;


 	}

     /*
     *   Method Name: calculate
     *   @return A character denoting the grade.
     */
     // Write your method here
     public char calculate()
     { int total=0;
      char str;
          for(int i= 0;i<testScores.length;i++)
         {
             total=total+testScores[i];


         }
      int aver= total/testScores.length;
      if(aver>=90&&aver<=100)
      {str='O';
      }
     else if(aver>=80)
      {str='E';
      }
       else if(aver>=70)
      {str='A';
      }
       else if(aver>=50)
      {str='P';
      }
       else if(aver>=40)
      {str='D';
      }
      else
      {
          str='T';
      }
      return str;

     }
 }



 //javascript



 class Student extends Person {
   constructor(firstName, lastName, id, scores){
     super(firstName, lastName, id);
     this.scores = scores
     this.grade = this.calculate()
   }
   printPerson() {
     super.printPerson();
   }
   calculate() {
     let avg = this.scores.reduce((a, b) => a + b) / this.scores.length;
     if(avg<40) return 'T';
     else if(avg>=40 &&  avg<55) return 'D';
     else if(avg>=55 &&  avg<70) return 'P';
     else if(avg>=70 &&  avg<80) return 'A';
     else if(avg>=80 &&  avg<90) return 'E';
     else if(avg>=90 &&  avg<=100) return 'O';
   }
 }
