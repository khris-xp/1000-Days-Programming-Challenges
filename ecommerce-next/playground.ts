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

interface StudentInfo<T extends Student = Student> {
    data: T
    grades: number[]
}

export default function Play() {

    const logStudentInfo = (info: StudentInfo<PostGraduateStudent>) => {
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