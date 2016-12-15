import { Component, OnInit } from "@angular/core";
import { ShoppingListCheckOffService } from "../service/shoppingListCheckOff.service";

@Component({
    selector: 'fa-bought',
    templateUrl: 'bought.component.html'
})

export class BoughtComponent implements OnInit{   
    items: any[];

    constructor(private shoppingListService : ShoppingListCheckOffService){
    }

    ngOnInit() {
        this.items = this.shoppingListService.getBoughtItems();
    }
}