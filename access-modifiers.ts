// Access Modifiers


// Take this class as example.

class Animal {
    type: string;
    weight: number;
    name: string;

    sayHi = () => console.log(`Hi ${this.name}`);

    constructor(type:string, weight:number, name:string) {
        this.type = type;
        this.weight = weight;
        this.name = name;
    }
}

// Now create an instance of that
let firstAnimal : Animal = new Animal('dog', 10, 'Rufus');

// For sure the weight and the name can be changed in the time.

firstAnimal.name = 'Foofy';
console.log(firstAnimal.name);

// But for sure, his type will never change, unless he's a transformer ( :P );
firstAnimal.type = 'Cat'; // We want to avoid THIS! 

// So, how can we avoid firstAnimal.type to change? 
// We use Access Modifiers. In this case we see the 3 importants access modifiers.

// Public ( by default, can always be accessed )
// Private ( can be accessed within his main class only )
// Protected ( can be accessed within his main class and subclass )

// In order to obtain the result that we want, we need to do something like that.
class AnimalModified {
    private type: string;
    weight: number;
    name: string;

    sayHi = () => console.log(`Hi ${this.name}`);

    constructor(type:string, weight:number, name:string) {
        this.type = type;
        this.weight = weight;
        this.name = name;
    }
}

// Using "private" before the name of the variable, we ensure a sort of "protection" that will grantee this variable
// unaccessible by the outside.

const secondAnimal : AnimalModified = new AnimalModified('dog', 10, 'Dogy');

// We will not be able to do 
// console.log(secondAnimal.type); // Try to uncomment this line of code and read the error.

// neither to change its value.
// secondAnimal.type = "cat"; // Try to uncomment this line of code and read the error.