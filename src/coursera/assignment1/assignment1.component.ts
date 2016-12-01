import { Component } from "@angular/core";

@Component({
    selector: 'fa-assignment1',
    templateUrl: 'assignment1.component.html',
    styleUrls: ['assignment1.component.css']
})

export class Assignment1Component {
    items : string;
    message: string;

    success: boolean;
    touched: boolean;

    checkItems(){
        this.onTouched(null);

        let itemsArray = (this.items || "").split(',').filter((i) => { return i; });

        this.message = !itemsArray.length ? "Please enter data first" : itemsArray.length > 3 ? "Too much!" : "Enjoy!";
        this.success = !!itemsArray.length;
    }

    onTouched($event: any) {
        this.touched = true;
    }
}