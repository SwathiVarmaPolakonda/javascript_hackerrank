// class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
//
// let p = new Polygon(1, 2);
// console.log('Polygon p:', p);



// try {
//     let p = new Polygon(1, 2);
//     console.log('Polygon p:', p);
// }
// catch (exception) {
//     console.log(exception.name + ': ' + exception.message);
// }
// class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
//
// p = new Polygon(1, 2);
// console.log('Polygon p:', p);



// let Polygon = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };
//
// console.log('Polygon:', Polygon);
// let p = new Polygon(1, 2);
// console.log('p:', p);




// let Polygon = class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };
//
// console.log('Polygon:', Polygon);
// let p = new Polygon(1, 2);
// console.log('p:', p);


//prototype method
// 'use strict';
//
// class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     getArea() {
//         return this.height * this.width;
//     }
// }
//
// const square = new Polygon(10, 10);
//
// console.log(square.getArea());





//static method
//
// 'use strict';
//
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;
//         return Math.sqrt(dx * dx + dy * dy);
//     }
// }
//
// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
//
// // The correct way to call a static method
// console.log(Point.distance(p1, p2));
//
// // Attempt to call a static method on an instance of the class
// try {
//     console.log(p1.distance(p1, p2));
// }
// catch (exception) {
//     console.log(exception.name + ': ' + exception.message);
// }





//inheritance using extends keyword
// 'use strict';
//
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(this.name, 'speaks.');
//     }
// }
//
// class Dog extends Animal {
//     speak() {
//         console.log(this.name, 'barks.');
//     }
// }
//
// let spot = new Dog('Spot');
// spot.speak();
//
// spot = new Animal('Spot');
// spot.speak();

//inheritance using extends keyword using prototype function
// 'use strict';
//
// function Animal(name) {
//     this.name = name;
// }
//
// Animal.prototype.speak = function() {
//     console.log(this.name, 'speaks.');
// }
//
// class Dog extends Animal {
//     speak() {
//         console.log(this.name, 'barks.');
//     }
// }
//
// let spot = new Dog('Spot');
// spot.speak();
//
// spot = new Animal('Spot');
// spot.speak();


//using super keyword
// 'use strict';
//
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(this.name, 'speaks.');
//     }
// }
//
// class Dog extends Animal {
//     speak() {
//         super.speak();
//         console.log(this.name, 'barks.');
//     }
// }
//
// let spot = new Dog('Spot');
// spot.speak();


//extending Object'use strict';

class Animal {
    constructor(name) {
        this.animalType = 'Animal'
        this.name = name;
    }
    type() {
        console.log(this.name, 'is type', this.animalType);
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    constructor(name, collarColor) {
        super(name);
        this.animalType = 'Dog';
        this.collarColor = collarColor;
    }
    speak() {
        console.log(this.name, 'barks.');
    }
    collar() {
        console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
}

let spot = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();

// Because the Animal constructor only expects one argument,
// only the first value passed to it is used
spot = new Animal('Spot', 'white');
spot.type();
spot.speak();
try {
    spot.collar();
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message
    + ' (collar is a method of Dog, not Animal).');
}


// 'use strict';
//
// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }
//     area() {
//         console.log(this.length * this.width);
//     }
// }
//
// class Square extends Rectangle {
//     area() {
//         console.log(this.length * this.width);
//
//     }
// }
//
// let obj = new Square(4,5);
// obj.area();
//
// obj = new Rectangle(5,6);
// obj.area();




// class Rectangle{
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }
//   area() {
//     console.log(this.length * this. width);
//   }
// }
// class Square extends Rectangle {
//   area() {
//     super.area();
//     console.log(this.length * this. width);
//   }
// }
// let obj = new Square(4,5);
// obj.area();


// function Rectangle (length, width) {
//   this.length = length;
//   this.width = width;
// }
// Rectangle.prototype.area = function() {
//   console.log(this.length * this.width);
// }
// class Square extends Rectangle {
//   area() {
//     console.log(this.length * this.width);
//   }
// }
// let obj = new Square(4,5);
// obj.area();



// /*
//  *  Write code that adds an 'area' method to the Rectangle class' prototype
//  */
//  function Rectangle (length, width) {
//    this.length = length;
//    this.width = width;
//  }
//     Rectangle.prototype.area = function() {
//         return(this.w*this.h);
//     };
// /*
//  * Create a Square class that inherits from Rectangle and implement its class constructor
//  */
//
//     class Square extends Rectangle {
//         constructor(s) {
//             super(s);
//             this.h = s;
//             this.w = s;
//         }
//     };
