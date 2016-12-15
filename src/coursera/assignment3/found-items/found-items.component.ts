import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'fa-found-items',
    templateUrl: 'found-items.component.html'
})

export class FoundItemsComponent {  
    @Input() items: any[];
    @Output() itemRemoveRequested = new EventEmitter<number>(); 

    onRemove(index: number) {
        this.itemRemoveRequested.emit(index);
    } 
}