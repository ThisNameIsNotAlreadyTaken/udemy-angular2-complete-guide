import { Component, OnInit } from "@angular/core";
import { ShoppingListCheckOffService } from "../service/shoppingListCheckOff.service";

@Component({
    selector: 'fa-toBuy',
    templateUrl: 'toBuy.component.html'
})

export class ToBuyComponent implements OnInit{   
    items: any[];

    constructor(private shoppingListService : ShoppingListCheckOffService){
    }

    moveToBought(index: number) {
        this.shoppingListService.moveToBought(index);
    }

    ngOnInit() {
        this.items = this.shoppingListService.getToBuyItems();
    }
}