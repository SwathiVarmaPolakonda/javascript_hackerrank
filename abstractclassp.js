class MyBook extends Book {
    int price;

    MyBook(String title, String author, int price) {
        super(title, author);
        this.price = price;
    }

    void display() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: " + price);
    }
}


//javascript
// Declare your class here.
class MyBook extends Book {
    /**
    *   Class Constructor
    *
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    constructor(title, author, price) {
        super(title, author);
        this.price = price;

    }
    /**
    *   Method Name: display
    *
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    display() {
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Price: " + this.price);
    }
}
// End class


// 2
class MyBook extends Book {

    constructor(title, author, price){
        super(title,author);
        this.price = price;
    }

    display() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`);
    }
}


// 3
class MyBook extends Book{

    constructor(title, author, price) {
        super(title, author);
        this.price = price;
    }

    display() {
        console.log('Title: ' + this.title);
        console.log('Author: ' + this.author);
        console.log('Price: ' + this.price);
    }
}




class MyBook extends Book{
    String title;
    String author;
    int p;
    MyBook(String title , String author , int price ){
       super(title,author);
       this.p = price;
       this.title = title;
       this.author = author;
    }
    void display(){
       System.out.pintln("Title: " +title);
       System.out.pintln("Author: " +author);
       System.out.pintln("Price: " +p);
 }



 class MyBook extends Book { private int price; MyBook(String title, String author, int price) { super(title,author); this.price=price; }
void display()
{
System.out.println("Title: "+title);
System.out.println("Author: "+author);
System.out.println("Price: "+price);
}
}



class MyBook extends Book{
    public int p;
    MyBook(String title,String author,int price){
        super(title,author);
        p=price;
    }
    void display(){
        System.out.println("Title: "+title);
        System.out.println("Author: "+author);
        System.out.println("Price: "+p);
    }
}


class MyBook extends Book{
int price;

MyBook(String title1, String author1, int price){
    super(title1,author1);
    this.price = price;
}


void display(){
    System.out.println("Title: "+title);
    System.out.println("Author: "+author);
    System.out.println("Price: "+price);

}
}
