// interface Person {
//     name: string
//     age: number
// }

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface logPersonInfoFun {
    (name: string, age: number): string
}

// Type Allias
type Data = string;


const Play = () => {

    const name: Data = "Khris Bharmmano";
    const age: number = 18;

    const logPersonInfo: logPersonInfoFun = (personName: string, personAge: number): string => {
        return `Name : ${personName} , Age : ${personAge}`
    }
    console.log(logPersonInfo(name, age));

    // Class

    // const person: Person = {
    //     name: "John",
    //     age: 34
    // }

    const logPersonInfo2 = (person: Person) => {
        const info = `Name : ${person.name} , Age: ${person.age}`
        return info
    }
    console.log(logPersonInfo2(new Person("Michale",22)));

}

export default Play;