import { Component, Input } from "@angular/core";

@Component({
    selector: 'fa-assignment4-categories-list',
    templateUrl: 'categories-list.component.html',
    styleUrls: ['categories-list.component.css']
})

export class CategoriesListComponent {
    @Input() items: any[] = [];
}