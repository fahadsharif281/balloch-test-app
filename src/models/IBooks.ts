export interface Datum {
    id: number;
    title: string;
    author: string;
    genre: string;
    description: string;
    isbn: string;
    image: string;
    published: string;
    publisher: string;
}

export interface IBooks {
    status: string;
    code: number;
    total: number;
    data: Datum[];
}

