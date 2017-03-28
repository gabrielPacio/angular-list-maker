export class ListElement {
    id: number;
    title: string;
    content: string;
    author: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
