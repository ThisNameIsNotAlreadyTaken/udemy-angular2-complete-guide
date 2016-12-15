import { Component, Input } from "@angular/core";

@Component({
    selector: 'fa-assignment3-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})

export class LoaderComponent {
    @Input() visible: boolean;
}