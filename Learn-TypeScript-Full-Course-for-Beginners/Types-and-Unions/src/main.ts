type ID = string;
type PopularTag = string;
// type MaybePopularTag = PopularTag | null;
type MaybePopularTag = PopularTag | string[] | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTag: PopularTag[] = ['Dragon', 'Coffee'];

const dragonsTag: MaybePopularTag = [];

let username: string = "Khris";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let user: UserInterface | null = null;

let SomeProp: string | number | null | undefined | string[] | object