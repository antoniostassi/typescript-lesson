// Types

// Variable Types
let myVar1 : number;
let myVar2 : boolean;
let myVar3 : string;
let myVar4 : any; // myVar4 can be of any type
let myVar5 : number[]; // Array of numbers
let myVar6 : string[]; // Array of strings
let myVar7 : any[]; // Array composed by any type
let myVar8 : [number, number] // Array composed by TWO ELEMENTS only ( no one less, no one more ) of NUMBER type 
let myVar9 : [string] // Array composed by ONE ELEMENT only, of STRING type.

// Enums
const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

// I can have the same result of consts by using enum.
enum Color { Red, Green, Blue };
let backgroundColor : number = Color.Blue; // -> This means that backgroundColor = 2

console.log(backgroundColor);

// Types Assertions
let message; // Message type will be ANY, so we will not have any intellisense 
message = 'abc'; // even if we initialise it as a string

let endsWithC : boolean = message.endsWith('c'); // No intellisense

let endsWithCAssertion : boolean = (<string>message).endsWith('c'); // Intellisense

let endsWithCAssertion2 : boolean = (message as string).endsWith('c'); // Intellisense 2