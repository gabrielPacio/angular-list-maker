import { Component, ViewChild } from '@angular/core';
import { ListDataService } from './list-data.service';
import { ListElement } from './list-element';
import { ListHeaderComponent } from './list-header-component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ListDataService]
})
export class AppComponent {
    @ViewChild(ListHeaderComponent) listHeaderComponent: ListHeaderComponent;

    editedListElement:ListElement;

    constructor(private listDataService: ListDataService){
    }

    onAddListElement(listElement) {
        this.listDataService.addListElement(listElement);
    }

    removeListElement(listElement) {
        this.listDataService.deleteListElementById(listElement.id);
    }

    edit(listElement) {
        this.editedListElement = listElement;
        this.listHeaderComponent.edit(listElement);
        //this.isEditMode = true;
    }

    get list(){
        return this.listDataService.getList();
    }
}
