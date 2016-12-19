import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs/Rx";

@Component({
    selector: 'fa-assignment4-items-list',
    templateUrl: 'items-list.component.html'
})

export class ItemsListComponent implements OnInit, OnDestroy {
    category: any;
    items: any[] = [];

    private subscription: Subscription;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.route.data.subscribe((data: any) => {
            this.category = data.itemsData.category;
            this.items = data.itemsData.menu_items;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}