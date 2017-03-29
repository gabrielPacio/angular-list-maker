import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ListElement } from './list-element';

@Component({
    selector: 'app-list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent {
    newListElement: ListElement = new ListElement();
    isEditMode:boolean = false;

    @Output()
    add: EventEmitter<ListElement> = new EventEmitter();

    constructor() {
    }

    addListElement() {
        this.add.emit(this.newListElement);
        this.newListElement = new ListElement();
    }

    clearHeader() {
        this.newListElement = new ListElement();
        this.isEditMode = false;
    }

    edit(listElement) {
        this.isEditMode = true;
        this.newListElement = listElement;
    }
}
