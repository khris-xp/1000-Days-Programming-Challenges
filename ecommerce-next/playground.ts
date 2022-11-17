
interface Person {
    kind: "business" | "academic" | "others"
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

export default function Play() {
    const iterate = (items: Array<string>) => {
        return items.forEach((items) => console.log(items.toUpperCase()))
    }

    iterate(["johns", "khris", "roger"])
}