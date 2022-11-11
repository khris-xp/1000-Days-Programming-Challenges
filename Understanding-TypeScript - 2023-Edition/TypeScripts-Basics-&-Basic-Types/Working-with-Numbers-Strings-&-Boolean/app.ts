const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {

    const result = n1 + n2;

    if (showResult) {
        console.log(`${phrase} ${result}`);
    } else {
        return n1 + n2
    }
}

const number1 = 11;
const number2 = 5;
const printResult = true;
const resultPhrase = `Result : `

add(number1, number2, printResult, resultPhrase);