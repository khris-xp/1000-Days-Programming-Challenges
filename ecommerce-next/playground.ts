import { info } from "console"

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

type SUVCar = {
    name: string
    maxSpeed: 150
    isCarbonFree: boolean
}

type Car = RaceCar | CityCar | SUVCar


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

    const printInfo = (someObject: { [key: string]: string | number | boolean}) => {

    }

    printInfo({
        age: 18,
        isMarried: false,
        name: "Khris Bharmmano",
        // records: {}
    })

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
            case 150:
                console.log(car.isCarbonFree)
                break;
            default:
                const _never: never = car
                return _never
        }
    }

    logCarInfo(car)
}