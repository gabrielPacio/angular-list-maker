import { Injectable } from '@angular/core';
import { ListElement } from './list-element';


@Injectable()
export class ListDataService {

    // counter to simulate auto-incremental ID
    lastId: number = 0;

    // Data holder
    list: ListElement[] = [];

    constructor() {}

    // POST /listElement
    addListElement(listElement: ListElement): ListDataService {
        if (!listElement.id) {
            listElement.id = ++this.lastId;
        }
        this.list.push(listElement);
        return this;
    }

    // DELETE /listElement/:id
    deleteListElementById(id: number): ListDataService {
        this.list = this.list
            .filter(element => element.id !== id);
        return this;
  }

    // PUT /listElement/:id
    updateListElementById(id: number, values: Object = {}): ListElement {
        const listElement = this.getListElementById(id);
        if (!listElement) {
            return null;
        }
        Object.assign(listElement, values);
        return listElement;
    }

    // GET /list
    getList(): ListElement[] {
        return this.list;
    }

    // GET /list/:id
    getListElementById(id: number): ListElement {
    return this.list
        .filter(listElement => listElement.id === id)
        .pop();
    }
}
