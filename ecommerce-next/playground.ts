interface Person {
    name: string
}

interface Student extends Person {
    name: string
    age: number
}

interface PostGraduateStudent extends Person {
    project?: string[]
    age: number
}

type StudentInfo<T extends any = Student> = T extends Student ? {
    data: T
    grades: number[]
} : string

type Car = { engine: string }

export default function Play() {

    const logStudentInfo = (info: StudentInfo<Student>) => {
        console.log(info)
    }

    const info = {
        data: {
            name: "Khris",
            age: 18,
        },
        grades: [10, 20],
        project: ["Project1", "Project2"]
    }

    logStudentInfo(info);
}