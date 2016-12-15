import { Component, ViewEncapsulation } from "@angular/core";
import { ShoppingListCheckOffService } from "./service/shoppingListCheckOff.service";

@Component({
    selector: 'fa-assignment2',
    templateUrl: 'assignment2.component.html',
    styleUrls: ['assignment2.component.css'],
    providers: [ ShoppingListCheckOffService ],
    encapsulation: ViewEncapsulation.None  
})

export class Assignment2Component {   
}