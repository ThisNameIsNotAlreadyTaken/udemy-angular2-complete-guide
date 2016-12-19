import { Component, OnInit, OnDestroy } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs/Rx";

@Component({
    selector: 'fa-assignment4-categories',
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.css']
})

export class CategoriesComponent implements OnInit, OnDestroy {
    categories: any[];

    private subscription: Subscription;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.route.data.subscribe((data: any) => this.categories = data.categories);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}