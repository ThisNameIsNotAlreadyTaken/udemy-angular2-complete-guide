import { Component, Input } from "@angular/core";

@Component({
    selector: 'fa-assignment5-menu-item',
    templateUrl: 'menu-item.component.html',
    styleUrls: ['menu-item.component.css']
})

export class MenuItemComponent {
    imageBasePath = "https://trinat-coursera-angularjs.herokuapp.com/images/";

    @Input() item: any;

    get imageUrl() {
        return this.imageBasePath + this.item.short_name + '.jpg';
    }
}