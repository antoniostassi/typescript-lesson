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
    // Parameters
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
        console.log( this.x )
    }

    teleportTo(another: Coord) {}
    // We don't need to give as argument the current Coord parameters because they are part of one unit, 
    // the function can directly access the properties in the same unit.

}

// But how can we use those methods? 
// We can create an Instance of Coord

let playerPosition: Coord = new Coord(); // playerPosition is an Instance of a Class, so an Object
playerPosition.getX();

// But x is clearly undefined, so how can we fix that?
playerPosition.x = 2;
playerPosition.getX();


