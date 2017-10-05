static void Main(String[] args) {
    int n = Convert.ToInt32(Console.ReadLine());
    var b = Convert.ToString(n,2);
    string[] arr = b.Split('0').ToArray();
    int c = arr.Select(x => x.Length).Max();
    Console.WriteLine(c);
}


public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int b,count=0,max=0;
    while(n>0){
        b=n%2;
        if(b==1){
            count++;
        if(count>max){
            max=count;
        }
        }
        else{
            count=0;
        }
        n=n/2;
    }
    System.out.println(max);
}


public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int rem = 0;
    int max = 0;
    int i = 0;
    while(n > 0){
        rem = n % 2 ;
        if (rem == 1){
            i ++;
            if (i > max){
                max = i ;
            }
        }
        else{
            i = 0;
        }
        n = n/2;
    }
   System.out.println(max);
}



int count=0;int max=0;
for(int i=0;i<bn.length();i++)
{
        if(bn.charAt(i)=='1')
            {
                count++;
                if(count>max)
                    max=count;
            }
            else
             {
                count=0;
            }
}

System.out.println(max);



static void Main(String[] args) {
    int n = Convert.ToInt32(Console.ReadLine());
    int val=n;
    int remainder=0;
    int count=0;
    while(val>0)
    {
        remainder=val%2;
        if(val!=0)
        {
        val=val/2;
        }

        if(remainder==1)
        {
            count++;
        }else
        {

            count=0;
        }
    }
    Console.WriteLine(count);
}


int count = 0;

while (n) {
    n = (n & (n << 1));
    count++;
}
printf ("%d\n", count);

return 0;



public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int b,count=0,max=0;
    while(n>0){
        b=n%2;
        if(b==1){
            count++;
        if(count>max){
            max=count;
        }
        }
        else{
            count=0;
        }
        n=n/2;
    }
    System.out.println(max);
}


class Solution {

        static void Main(String[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());
            string str = ConvertToBinary(n);
            int max = GetMaxConseq(str);
            Console.WriteLine(max);
        }
        public static string ConvertToBinary(int n)
        {
            if (n <= 0)
                return "";
            else
                return ConvertToBinary(n / 2) + (n % 2).ToString() ;
        }
        public static int GetMaxConseq(string binary)
        {
            int max = 0, final = 0;
            for (int i = 0; i < binary.Length; i++)
            {
                if (binary[i] == '0') max = 0;
                else
                    max++;
                if (max > final) final = max;
            }
            return final;
        }
}




using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution
{

    static void Main(String[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine());
        string binary = Convert.ToString(n, 2);
        string [] ones = binary.Split('0');
        Array.Sort(ones);
        string maxstring = ones[ones.Count() - 1];
        Console.WriteLine(maxstring.Length);
    }
}



//Get the binary representation of the input number
string bin = Convert.ToString(n, 2);
//Split the string based on the zeros it has
string[] splitted = bin.Split('0');
//As we only have strings of 1's, Max() always returns the string with the biggest length
Console.WriteLine(splitted.Max().Length);



/*
 * C program to accept a decimal number and convert it to binary
 * and count the number of 1's in the binary number
 */
#include <stdio.h>

void main()
{
    long num, decimal_num, remainder, base = 1, binary = 0, no_of_1s = 0;

    printf("Enter a decimal integer \n");
    scanf("%ld", &num);
    decimal_num = num;
    while (num > 0)
    {
        remainder = num % 2;
        /*  To count no.of 1s */
        if (remainder == 1)
        {
            no_of_1s++;
        }
        binary = binary + remainder * base;
        num = num / 2;
        base = base * 10;
    }
    printf("Input number is = %d\n", decimal_num);
    printf("Its binary equivalent is = %ld\n", binary);
    printf("No.of 1's in the binary number is = %d\n", no_of_1s);
}



/*
* C program to convert decimal numbers to binary numbers
*/

#include <stdio.h>
#include <conio.h>

long decimalToBinary(long n);
int main() {
    long decimal;
    printf("Enter a decimal number\n");
    scanf("%ld", &decimal);
    printf("Binary number of %ld is %ld", decimal, decimalToBinary(decimal));

 getch();
    return 0;
}



/* Function to convert a decinal number to binary number */
long decimalToBinary(long n) {
    int remainder;
 long binary = 0, i = 1;

    while(n != 0) {
        remainder = n%2;
        n = n/2;
        binary= binary + (remainder*i);
        i = i*10;
    }
    return binary;
}





#include <stdio.h>
#include <math.h>
long long convertDecimalToBinary(int n);

int main()
{
    int n;
    printf("Enter a decimal number: ");
    scanf("%d", &n);
    printf("%d in decimal = %lld in binary", n, convertDecimalToBinary(n));
    return 0;
}

long long convertDecimalToBinary(int n)
{
    long long binaryNumber = 0;
    int remainder, i = 1, step = 1;

    while (n!=0)
    {
        remainder = n%2;
        printf("Step %d: %d/2, Remainder = %d, Quotient = %d\n", step++, n, remainder, n/2);
        n /= 2;
        binaryNumber += remainder*i;
        i *= 10;
    }
    return binaryNumber;
}



int main()
{
  int n, c, k;

  printf("Enter an integer in decimal number system\n");
  scanf("%d", &n);

  printf("%d in binary number system is:\n", n);

  for (c = 31; c >= 0; c--)
  {
    k = n >> c;

    if (k & 1)
      printf("1");
    else
      printf("0");
  }

  printf("\n");

  return 0;
}


#include<stdio.h>
#include<conio.h>
void main()
{
int d,rem,i=1;
long int bin=0;
printf("Enter the decimal number : ");
scanf("%d",&d);
while(d>0)
{
rem=d%2;
d=d/2;
bin=bin+(i*rem);
i=i*10;
}
printf("The binary number is %ld",bin);
getch();
}
/* eg.
enter decimal no 10
binary no is 1010 */



//A very Powerful method just a bit of tweaking done here
#include<iostream.h>
#include<conio.h>
void main()
{
unsigned long dec,rem,i=1;
unsigned long bin=0;//remember to set it to zero
cout<<"Enter a decimal number : ";
cin>>dec;
while(dec>0)
{
rem=dec%2;
dec=dec/2;
bin=bin+(i*rem);
i=i*10;
}
cout<<"The binary form is "<<bin;
getch();
clrscr();
}


#include<stdio.h>
void main()
{
int n,j=0,i=1;
printf("\nEnter the number : ");
scanf("%d",&n);
while(n!=0)
{
j=j+((n%2)*i);
n=n/2;
i=i*10;
}
printf("%d",j);
}



Scanner in = new Scanner(System.in);
int n = in.nextInt();
int counter = 0, max =0;
while (n > 0) {
    int rem = n%2;
    if (rem==1) counter++;
    else counter=0;
    max = Math.max(counter, max);
    n/=2;
}
System.out.println(max);


public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int b,count=0,max=0;
    while(n>0){
        b=n%2;
        if(b==1){
            count++;
        if(count>max){
            max=count;
        }
        }
        else{
            count=0;
        }
        n=n/2;
    }
    System.out.println(max);
}




int main(){
    int n,max,x;
    max=0;
    int count=0;
    scanf("%d",&n);
    while(n>0)
    { x=n%2;
      n=floor(n/2);
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
        printf("%d",max);
    }
    else
    {
        printf("%d",count);
    }
   return 0;


}



using System;
class Solution {
    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        int counter = 0, maxcount = 0;
        while(n > 0){
            if(n%2 == 1){
                counter++;
                maxcount = counter > maxcount ? counter : maxcount;
            }else{
                counter = 0;
            }
            n /= 2;
        }
        Console.WriteLine(maxcount);
    }
}


#include <iostream>
using namespace std;
int main() {
    int n,count=0;
     cin>>n;
       while(n>0)
         {
            int r=n%2;
            n=n/2;
         if(r==1){
            count++;
         }else count=0;}
            cout<<count<<endl;
    return 0;
}


console.log(Math.max(...(parseInt(readLine())).toString(2).split("0")).toString().length)


public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int k = 0, max = 0;
        while(n > 0){
            if ((n%2)==1)
                k++;
            else
                k = 0;
            if(k>max) max = k;
            n = n/2;
        }
        System.out.println(max);
    }



    int rem,max=0,count=0;
    while(n>=1){
        rem = n%2;
        if(rem==1){
            count++;
            if(count>max)
               max=count;
        }
        else
            count=0;
        n=n/2;
    }
    System.out.println(max);
