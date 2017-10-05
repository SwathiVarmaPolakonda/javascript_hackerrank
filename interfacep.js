for(int i=1;i<=n;sum+=(n%i==0?i:0),i++);
//
for (int i = 1; i <= n; i++)
{
     if (n % i == 0)
         sum += i;
}
//
Math.sqrt(n) % 1 == 0
//

//java
class Calculator implements AdvancedArithmetic{
public int divisorSum(int n){
 int c=0;
 for(int i=1;i<=n;i++){
     if(n%i==0){
         c+=i;
     }
 }
 return c;
} }
//
class Calculator implements AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        int sum = n;
        for(int i=1; i <= n/2; i++)
        {
            if(n % i == 0)
                sum += i;
        }
        return sum;
    }
}
