import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ListDataService } from './list-data.service';
import { ListElement } from './list-element';

@Component(
  {
    selector: 'app-list-section',
    templateUrl: './list-section.component.html',
    styleUrls: ['./list-section.component.css']
  }
)
export class ListSectionComponent {

    @Input() list: ListElement[];

    @Output()
    removeClick: EventEmitter<ListElement> = new EventEmitter();

    @Output()
    editClick: EventEmitter<ListElement> = new EventEmitter();

    constructor(){}

    onEditClick(element: ListElement){
        this.editClick.emit(element);
    }

    onRemoveClick(element: ListElement){
        this.removeClick.emit(element);
    }
}
