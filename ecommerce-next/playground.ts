interface Person {
    name: string
    age: number
    city: string
}

interface Car {
    brand: string
    name: string
    city: string
    age: number
}

class BusinessPerson implements Person {
    name = ""
    age = 0
    city = ""
    salary?= 1000
}

class Student implements Person {
    name = ""
    age = 0
    city = ""
}

class Logger<T extends Person = Person> {

    log(items: Array<T>, callback: (i: T) => void) {
        items.forEach((item) => {
            callback(item)
        })
    }
}

export default function Play() {

    const logger = new Logger()
    //const personArr = [{ name: 'Khris', age: 18, city: "Bangkok", salary: 1000 }, { name: 'John', age: 34, city: "New York" }, { name: 'Paul', age: 42, city: "New York" }]
    const carArr = [{ name: 'Ford V1', age: 2, city: 'Bangkok', brand: 'Ford Mustang' }, { name: 'Ford V2', age: 3, city: 'Bangkok', brand: 'Ford Mustang' }, { name: 'Toyota V1', age: 4, city: 'New York', brand: 'Toyota' }]
    logger.log(carArr, (item => {
        console.log(item)
    }))
}