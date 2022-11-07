const addId = <T>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

const user = {
    name: "Khris",
};

const result = addId(user);
console.log(`Result ${result}`);