interface UserInterface {
    getFullname(): string;
}

class User implements UserInterface {
    protected firstName: string
    private lastName: string
    readonly unchangableName: string;
    age: number
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.unchangableName = firstName
    }

    changableName(): void {
        // this.unchangableName = "Hello"
    }

    getFullname(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(editor: string) {
        return this.editor
    }
}

const user = new User("Khris", "Bharmmano", 18);
const admin = new Admin("Foo", "Bar", 17);

console.log(user);
console.log(User.maxAge);

console.log(admin.setEditor)