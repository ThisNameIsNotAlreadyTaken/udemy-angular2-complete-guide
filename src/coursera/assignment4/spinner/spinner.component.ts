import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationError, Event } from "@angular/router";
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'fa-assignment4-loader',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.css']
})

export class SpinnerComponent implements OnInit, OnDestroy {
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