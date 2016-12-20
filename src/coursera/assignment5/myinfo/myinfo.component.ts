import { Component, OnInit, OnDestroy } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs/Rx";

@Component({
    selector: 'fa-assignment5-myinfo',
    templateUrl: 'myinfo.component.html'
})

export class MyInfoComponent {
    info: any;

    private subscription: Subscription;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.route.data.subscribe((data: any) => this.info = data.info);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}