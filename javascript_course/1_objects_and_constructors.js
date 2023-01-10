const myObject = {
  property: "value",
  another: 77,
  "yet another": function () {},
};

// object constructor
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player = new Player("steve", "X");
console.log(player.name);
player.sayName();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(hobbit.info());

// prototypes

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};

// Functions in prototypes: If you don't do this, each instance of student
//  will have own function object, rather than being single function owned by
//  class like in other languages. From Odin:
/*
        If you’re using constructors to make your objects it is 
        best to define functions on the prototype of that object. 
        Doing so means that a single instance of each function
        will be shared between all of the Student objects. 
        If we declare the function directly in the constructor, 
        like we did when they were first introduced, that function 
        would be duplicated every time a new Student is created. 
        In this example, that wouldn’t really matter much, but in a 
        project that is creating thousands of objects, it really 
        can make a difference.
*/

// Prototypal inheritance

function BaseClass() {}

BaseClass.prototype.sayName = function () {
  console.log(this.name);
};

function ChildClass(name) {
  this.name = name;
}

ChildClass.prototype = Object.create(BaseClass.prototype);

const child = new ChildClass("Matti");
child.sayName();
