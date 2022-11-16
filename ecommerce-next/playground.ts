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

type TestType = () => any
type TestType2 = () => void


export default function Play() {
    const func1 = (x: TestType) => {
        const result = x();
        result()
    }

    // const func2 = (x: TestType2) => {
    //     const result = x();
    //     result()
    // }
}