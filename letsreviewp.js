for(int j=0;i<T;j++)
{
    scanf("%s",&input[i]);
    for(i=0;i<=strlen(input);i++)
    {   if(i%2==0)
    {
        printf("%c",input[i]);
    }
    }
    printf(" ");

    for(i=0;i<=strlen(input);i++)
    {   if(i%2==1)
        {
        printf("%c",input[i]);
    }
    }
}
return 0;

//https://www.youtube.com/playlist?list=PL_nOWs8S2y-Jku5R80lsRR_kONsWMKcPh


int main() {
    int x;
    cin >> x;
    for(int i = 0; i < x; i++){
        string s;
        string s1, s2;
        cin >> s;
        for(int j=0; j < s.size(); j++){
            if(j%2==0){
                s1 += s[j];
            }else{
                s2+= s[j];
            }
        }
        cout << s1 << " " << s2 << endl;
    }
    return 0;
}


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int t, i, j;
    string s, ev, od;
    cin>>t;
    for(i=0;i<t;i++){
        cin>>s;
        ev="";od="";
        for(j=0; j<s.length();j++){
            if(j%2==0) ev += s[j];
            else od += s[j];
        }
        cout<<ev;
        cout<<" "<<od<<endl;
    }
    return 0;
}



public static void main(String[] args) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
   Scanner scan = new Scanner(System.in);
    int T = scan.nextInt();
    String s;

    for(int i=0;i<T;i++){
        s = scan.next();

        for(int j=0;j<s.length();j++){

            if(j%2 ==0){
                System.out.print(s.charAt(j));
            }
        }
        System.out.print(" ");
        for(int j=0;j<s.length();j++){
            if(j%2==1){
                System.out.print(s.charAt(j));
            }

        }
        System.out.println();
    }

}


//javascript
function processData(input) {
    var m = input.split("\n")
    var even = "", odd = "";
    for (var i = 1; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++){
            if (j%2 == 0){
                even = even + m[i][j];
            }else {
                odd = odd + m[i][j];
            }
        }
        console.log(even + " " + odd);
        even = "", odd = "";
    }
}
