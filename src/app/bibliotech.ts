export class Page {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public createdAt: Date,
        public updateAt: Date
    ) {
        this.createdAt = new Date();
    }
}
export class Book {
    constructor(
        public id: number,
        public title: string,
        public resume: string,
        public image: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {
        this.createdAt = new Date();
    }
}

export class Categories {
    constructor(
        public id: number,
        public label: string
    ) {}
}

export class Users {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string, 
        public role: string
    ) {}
}