const Play = () => {

    const name: string = "Khris Bharmmano";
    const age: number = 18;

    const logPersonInfo = (personName: string, personAge: number) => {
        return `Name : ${personName} , Age : ${personAge}`
    }
    console.log(logPersonInfo(name,age));
}

export default Play;