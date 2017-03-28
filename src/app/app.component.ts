import { Component } from '@angular/core';
import { ListDataService } from './list-data.service';
import { ListElement } from './list-element';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ListDataService]
})
export class AppComponent {

    newListElement = new ListElement();
    isEditMode:boolean = false;

    constructor(private listDataService: ListDataService){
    }

    addListElement() {
        this.listDataService.addListElement(this.newListElement);
        this.newListElement = new ListElement();
    }

    removeListElement(listElement) {
        this.listDataService.deleteListElementById(listElement.id);
    }

    edit(listElement) {
        this.newListElement = listElement;
        this.isEditMode = true;
        console.log('aaaa',this.isEditMode);
    }

    clearHeader() {
        this.newListElement = new ListElement();
    }

    get list(){
        return this.listDataService.getList();
    }
}
