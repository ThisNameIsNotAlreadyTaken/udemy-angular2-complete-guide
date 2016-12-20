import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs/Rx";

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UserInfoService } from '../service/userinfo.service';

@Component({
    selector: 'fa-assignment5-signup',
    templateUrl: 'signup.component.html'
})

export class SignUpComponent {
    items: any[] = [];
    favoriteItem: any;
    isSaved: boolean = false;
    signUpForm: FormGroup;

    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private userInfoService: UserInfoService) { }

    ngOnInit() {
        this.subscription = this.route.data.subscribe((data: any) => this.items = data.items.menu_items);
        this.initForm();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit() {
        const info = this.signUpForm.value;
        info.favoriteItem = this.favoriteItem;
        this.userInfoService.setInfo(info);
        this.isSaved = true;
    }

    initForm() {
        let firstName = '';
        let lastName = '';
        let email = '';
        let phone = '';
        let favoriteDishNumber = '';

        this.signUpForm = this.formBuilder.group({
            firstName: [firstName, Validators.required],
            lastName: [lastName, Validators.required],
            email: [email, [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            phone: [phone, [Validators.required, Validators.pattern("([0-9]{3})-([0-9]{3})-([0-9]{4})")]],
            favoriteDishNumber: [favoriteDishNumber, [Validators.required, this.existingItemValidator.bind(this)]]
        });
    }

    existingItemValidator(control: FormControl): { [s: string]: boolean } {
        var item = control.value ? this.items.find(function (item) { return item.short_name.toLowerCase() === control.value.toLowerCase(); }) : null;
        this.favoriteItem = item;
        return item ? null : { existingItem: false };
    }
}