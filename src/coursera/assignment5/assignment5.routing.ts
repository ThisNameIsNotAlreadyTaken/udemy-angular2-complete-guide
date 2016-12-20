import { Routes } from "@angular/router";

import { StartComponent } from "./start/start.component";
import { MyInfoComponent } from "./myinfo/myinfo.component";
import { SignUpComponent } from "./signup/signup.component";

import { UserInfoResolve } from "./service/userinfo.resolve";
import { ItemsResolve } from "./service/items.resolve";

export const ASSIGNMENT5_ROUTES: Routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'start', component: StartComponent },
    { path: 'myinfo', component: MyInfoComponent, resolve: { info: UserInfoResolve } },
    { path: 'signup', component: SignUpComponent, resolve: { items: ItemsResolve } }
];