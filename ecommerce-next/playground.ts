interface Person {
    name: string
    age: number
    city: string
}

interface Car {
    name: string
}

class BusinessPerson implements Person {
    name = ""
    age = 0
    city = ""
    salary ?= 1000
}

class Student implements Person {
    name = ""
    age = 0
    city = ""
}

class Logger<T extends Person> {

    log(items: Array<T>, callback: (i: T) => void) {
        items.forEach((item) => {
            callback(item)
        })
    }
}

export default function Play() {

    const logger = new Logger<BusinessPerson>
    const personArr = [{ name: 'Khris', age: 18, city: "Bangkok", salary: 1000 }, { name: 'John', age: 34, city: "New York" }, { name: 'Paul', age: 42, city: "New York" }]
    logger.log(personArr, (item => {
        console.log(item)
    }))
}