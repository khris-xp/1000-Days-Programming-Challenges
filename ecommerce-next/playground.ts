interface Person {
    name: string
    age: number
}

// Type Allias
type Data = string;


const Play = () => {

    const name: Data = "Khris Bharmmano";
    const age: number = 18;

    const logPersonInfo = (personName: string, personAge: number) => {
        return `Name : ${personName} , Age : ${personAge}`
    }
    console.log(logPersonInfo(name, age));

    const person: Person = {
        name: "John",
        age: 34
    }

    const logPersonInfo2 = (personName: string, personAge: number) => {
        const info = `Name : ${personName} , Age: ${personAge}`
        return info
    }
    console.log(logPersonInfo2(person.name, person.age));

}

export default Play;