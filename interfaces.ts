// Interfaces

// What if we need to create a function like this:

let getCoords = (x, y, z, offsetX, offsetY, offsetZ, alive) => {}

// But we need a lot more than 7 arguments ?

// We usually do something like that.

let getCoordsSimple = (coordPoint) => {}
let coordPoint = {
    x: 1,
    y: 2,
    z: 3,
    // etc...
};
getCoordsSimple(coordPoint);

// But what happens if I give as argument the wrong point?
let coordPointWrong = {
    name:"Antonio",
    lastname:"Stassi"
};
getCoordsSimple(coordPointWrong);

// It will cause errors. For this reason, we can use Interfaces in Typescript

// We are going to define an Interface.

interface Point {
    x: number,
    y: number
}

let getNewCoords = (coords: Point) => {} // In this way, the argument MUST be of type of Point Interface.

// So, something like this would be ok

getNewCoords({ x : 3, y : 2 }) //

// But we can for sure better do something like that

let newCoords = {
    x: 3,
    y: 2
};

getNewCoords(newCoords);

log('\n -- \n');
