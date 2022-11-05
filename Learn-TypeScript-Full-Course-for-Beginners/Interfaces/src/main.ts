interface IUser {
    name: string,
    age?: number,
    getMessage(name: string): string
}

const user: IUser = {
    name: 'Khris',
    age: 30,
    getMessage(name) {
        return `Hello ${name}`
    }
};

const user2: IUser = {
    name: "Jack",
    getMessage(name) {
        return `Hello ${name}`
    }
};

console.log(user.getMessage("Daniel"));