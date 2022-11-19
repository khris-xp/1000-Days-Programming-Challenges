interface Person {
    name: string
}

type SingleType<T> = T extends any[] ? T[number] : T

export default function Play() {
    type Type1 = SingleType<string[]>
    type Type2 = SingleType<number[]>
    type Type3 = SingleType<Person>

    type Type4 = string[][number]
}