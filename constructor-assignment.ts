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