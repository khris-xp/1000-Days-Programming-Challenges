interface Person {
    name: string
    age: number
}

interface BusinessPerson extends Person {
    salary: number
}

interface AcademicPerson extends Person {
    publications: string[]
}

export default function Play() {
    const person: BusinessPerson = {
        name: "Khris",
        age: 18,
        salary: 14000
    }

    const person2: AcademicPerson = {
        name : "John",
        age: 34,
        publications: ["1","2","3"]
    }

    const logPerson = (person: Person) => {
        console.log(person)
    }
    logPerson(person);
    logPerson(person2)
}