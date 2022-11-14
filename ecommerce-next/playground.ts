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

// Type
type Car = {
    name: string
}

type RaceCar = {
    speed: number
} & AcademicPerson & { mileage: number }


export default function Play() {
    const person: BusinessPerson = {
        name: "Khris",
        age: 18,
        salary: 14000
    }

    const person2: AcademicPerson = {
        name: "John",
        age: 34,
        publications: ["1", "2", "3"]
    }

    const myCar: RaceCar = {
        name: "My Car",
        speed: 100,
        mileage: 200,
        publications: [""],
        age: 20
    }

    const logPerson = (person: Person) => {
        console.log(person)
    }

    const logCar = (myCar: Car) => {
        console.log(myCar);
    }

    logPerson(person);
    logCar(myCar);
}