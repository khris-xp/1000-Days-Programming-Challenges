const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {

    const result = n1 + n2;

    if (showResult) {
        console.log(`${phrase} ${result}`);
    } else {
        return n1 + n2
    }
}

let number1: number;
number1 = 10;
let number2: number;
// number2 = '11' Error
number2 = 11
const printResult: boolean = true;
const resultPhrase: string = `Result : `

add(number1, number2, printResult, resultPhrase);