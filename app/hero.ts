export class Hero {
    constructor(
        public id: number,
        public email: string,
        public password: string,
        public name?:string,
        public howDidYouFindUs?: string,
    ){}
}
