// Imagine to have a class like this.

class TestAccount {
    testName: string;
    private testNickname: string;
    protected testAge: number;

    constructor(testName: string, testNickname: string, testAge: number) {
        this.testName = testName;
        this.testNickname = testNickname;
        this.testAge = testAge;
    }

    log = (message) => console.log(message);
}

// You can understand by yourself that the constructor provides a lot of repetitions, and can be
// hard to read when complexity increased.

// For this reason, the class assignment comes to our aid.

class Account {
    constructor(public testName: string, private testNickname:string, protected testAge: number) {}
    log = (message) => console.log(message);
}

// This class provides the same result of "TestAccount" class, in less lines of code.

// But now, how will we be able to read or modify the private or protected parameters? 
// Simple.
// Using public functions!

class User {
    constructor(private email:string) {}
    // Think a situation where you have a class with a private email parameter. How can you change it?

    // We can use a public function that grants access to it.
    //changeEmail = (newValue: string) => this.email = newValue;

    // You don't need to specify "public", but we will do this time to make it more clear.
    public changeEmail = (newValue: string) => this.email = newValue;

    public getEmail = () => { return this.email }; // This function will return the value of this.email
}

// So, if we want to READ the parameter, we will need to use the function getEmail.
// If we want to change the value of the parameter, we will use changeEmail.
// Here is an example

const myUser : User = new User('test@example.com');
console.log(myUser.getEmail()); // It will log in console the email.

myUser.changeEmail('example@test.com'); // Changes the email in a new one.
console.log(myUser.getEmail()); // It will log in console the email.


