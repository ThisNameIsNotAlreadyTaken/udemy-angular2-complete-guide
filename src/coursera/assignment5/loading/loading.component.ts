import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationError, Event } from "@angular/router";
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'fa-assignment5-loader',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.css']
})

export class LoadingComponent implements OnInit, OnDestroy {
    visible: boolean = false;
    private subscription: Subscription;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.subscription = this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.visible = true;
            }
            if (event instanceof NavigationEnd) {
                this.visible = false;
            }
            if (event instanceof NavigationError) {
                this.visible = false;
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}