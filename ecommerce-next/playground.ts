interface Person {
    name: string
    age: number
}

class Logger<T> {

    log(items: Array<T>, callback: (i: T) => void) {
        items.forEach((item) => {
            callback(item)
        })
    }
}

export default function Play() {

    const logger = new Logger<string>
    const testArr = ["test1", "test2", "test3"];
    logger.log(testArr, (item => {
        console.log(item)
    }))

    const logger2 = new Logger<number>
    const numArr = [1, 2, 3]
    logger2.log(numArr, (item => {
        console.log(item)
    }))

    const logger3 = new Logger<Person>
    const personArr = [{ name: 'khris', age: 18 }, { name: 'John', age: 34 }, { name: 'Paul', age: 42 }]
    logger3.log(personArr, (item => {
        console.log(item)
    }))
}