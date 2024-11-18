export class Todo {
    id?: string;
    description?: string;
    done?: boolean;

    constructor(description: string, done: boolean){
        this.description = description;
        this.done = done;
    }
}