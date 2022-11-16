interface Person {
    kind: "business" | "academic" | "othertypes"
    name: string
    age: number
}

interface BusinessPerson extends Person {
    kind: "business"
    salary: number
}

interface AcademicPerson extends Person {
    kind: "academic"
    publications: string[]
}

interface Person {
    prop1: string
    prop2: number
}

type Human = BusinessPerson | AcademicPerson | { kind: "othertypes", special: string }


type RaceCar = {
    name: string
    maxSpeed: 200
    team: string
}

type CityCar = {
    name: string
    maxSpeed: 100
    space: string
}

type Car = RaceCar | CityCar


export default function Play() {

    const car: RaceCar = {
        name: "Race Car",
        maxSpeed: 200,
        team: "Ferari"
    }

    const person: Person = {
        prop1: "",
        prop2: 2,
        name: "",
        kind: "academic",
        age: 23

    }

    const logPerson = (human: Human) => {
        if (human.kind === "academic") {
            console.log(human)
        } else if (human.kind === "business") {
            console.log(human)
        } else {
            console.log(human)
        }
    }

    const logCarInfo = (car: Car) => {
        console.log((car as CityCar).maxSpeed);

        switch (car.maxSpeed) {
            case 200:
                console.log(car.team);
                break;
            case 100:
                console.log(car)
                break;
            default:
                console.log(car)
        }
    }

    logCarInfo(car)
}