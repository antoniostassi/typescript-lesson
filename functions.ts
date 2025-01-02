// Classic & Arrow Functions

// The functions below work exactly at the same way
let myLog = function(message) {
    console.log(message);
}

function myLog2(message) {
    console.log(message);
}

// We can also use the Arrow functions to do the same thing
let doLog = message => console.log(message);

let doLog2 = (message) => console.log(message);

// What if we have no parameters ?
let doLog3 = () => console.log('Whatever I want');

// What if I have to write more? 
let doLog4 = () => {
    console.log('1');
    console.log('2');
    console.log('3');
}