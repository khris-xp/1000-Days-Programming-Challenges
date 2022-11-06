const doSomeThing = (): void => {
    console.log("Do Something!");
}

const mFunction = (): never => {
    throw "Nerer Gonna Give UP!";
    // console.log("Never Gonna Give UP!");
}

{/* 
    void -> undefined
    any -> Any Types
*/}

let foo: void = undefined;
// foo = 1; : Error

let test: any = "1";
test = 5;

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = '1'
// let numericPageNumber: number = pageNumber as number; ## Error