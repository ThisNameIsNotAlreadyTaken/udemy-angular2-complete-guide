import { Component } from "@angular/core";

import { MenuSearchService } from './service/menu-search.service';

@Component({
    selector: 'fa-assignment3',
    templateUrl: 'assignment3.component.html',
    styleUrls: ['assignment3.component.css'],
    providers: [MenuSearchService]
})

export class Assignment3Component {
    searchTerm: string;
    foundItems: any[] = [];

    isLoading: boolean = false;
    isNothingFound: boolean = false;

    constructor(private menuSearchService: MenuSearchService) {
    }

    searchItems() {
        this.foundItems = [];

        if (!this.searchTerm) {
            this.isNothingFound = true;
            return;
        } else {
            this.isNothingFound = false;
        }

        this.isLoading = true;

        const self = this;

        this.menuSearchService.getMatchedMenuItems(this.searchTerm).subscribe(
            (foundItems: any[]) => {
                self.foundItems = foundItems;
                self.isNothingFound = !self.foundItems.length;
            },
            error => console.log(error),
            () => self.isLoading = false
        );
    }

    removeItem(index: number) {
        this.foundItems.splice(index, 1);
    }
}