
function studyConditionalStatements(number) {
    if (number > 0) {
        console.log(`${number} is a positive number.`);
    } else if (number < 0) {
        console.log(`${number} is a negative number.`);
    } else {
        console.log(`${number} is zero.`);
    }
}

function studyLoops() {
    console.log("\nFor Loop (count from 1 to 5):");
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

    console.log("\nWhile Loop (count from 1 to 5):");
    let j = 1;
    while (j <= 5) {
        console.log(j);
        j++;
    }

    console.log("\nDo-While Loop (count from 1 to 5):");
    let k = 1;
    do {
        console.log(k);
        k++;
    } while (k <= 5);
}


function addNumbers(a, b) {
    return a + b;
}

const multiplyNumbers = (a, b) => a * b;

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}


function studyIterator() {
    console.log("\nIterator Example:");
    const numbers = [10, 20, 30, 40];
    const iterator = numbers[Symbol.iterator]();

    let result = iterator.next();
    while (!result.done) {
        console.log(result.value);
        result = iterator.next();
    }
}


function* studyGenerator() {
    yield "This is the first yield.";
    yield "This is the second yield.";
    yield "This is the third yield.";
}

function executeStudy() {
    
    console.log("\nConditional Statements Example:");
    studyConditionalStatements(5);
    studyConditionalStatements(-3);
    studyConditionalStatements(0);

    
    studyLoops();


    console.log("\nFunctions Example:");
    console.log(`5 + 3 = ${addNumbers(5, 3)}`);
    console.log(`5 * 3 = ${multiplyNumbers(5, 3)}`);

    
    console.log("\nInheritance Example:");
    const dog = new Dog("Buddy");
    dog.makeSound(); 
    const genericAnimal = new Animal("Generic Animal");
    genericAnimal.makeSound(); 

    studyIterator();

    console.log("\nGenerator Example:");
    const gen = studyGenerator();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
}


executeStudy();
