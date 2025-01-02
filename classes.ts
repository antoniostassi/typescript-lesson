// Classes

// Imagine to start from this situation with an Interface

interface Coord {
    x: number,
    y: number
}

let getDistance = (coordA: Coord, coordB: Coord) => {};

// We want to know the distance between 2 coords with a function
// But imagine also that we can have much more functions related to Coord.
// There's something we can do to "assemble" every function to every Coord, making them as methods.

// So we can use CLASSES

class Coord {
    // Properties
    x: number;
    y: number;

    // We call the functions inside a class as "Methods"
    getDistance(another: Coord) { 
        // Logic here
    }

    // Examples
    getCoords() {} 
    changeCoords() {}
    public getX = () => {
        console.log('Coord X: ' + this.x )
    }

    teleportTo(another: Coord) {}
    // We don't need to give as argument the current Coord properties because they are part of one unit, 
    // the function can directly access the properties in the same unit.

}

// But how can we use those methods? 
// We can create an Instance of Coord

let playerPosition: Coord = new Coord(); // playerPosition is an Instance of a Class, so an Object
playerPosition.getX();

// But x is clearly undefined, so how can we fix that?
playerPosition.x = 2;
playerPosition.getX();

// Of course, this kind of method is functional, but it might not be the best practice to follow.
// Imagine having a lot of properties to define, this method would involve a lot of repetitions and a lot of lines of code.
// For this need, the Constructor comes to our aid

// For example, we can have a class named Person

class Person {
    firstname: string;
    lastname: string;
    age: number | undefined;
    position: Coord;
    
    sayHi = () => {
        console.log(`Hello, ${this.firstname} ${this.lastname}!`);
    }

    // Here comes the constructor.
    // The constructor consists in a function that will set default values of our properties.
    constructor(firstname : string, lastname :string, age? :number) {
        // age?:number gives the right to age to be optional 
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

let user: Person = new Person('Antonio', 'Stassi', 24);
user.sayHi(); // It will display on console "Hello, Antonio Stassi!"
 
