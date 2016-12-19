import { Routes } from "@angular/router";

import { StartComponent } from "./start/start.component";
import { CategoriesComponent } from "./menu/categories.component";

import { CategoriesResolve } from "./service/categories.resolve";

import { ASSIGNMENT4_MENU_ROUTES } from "./menu/categories.routing";

export const ASSIGNMENT4_ROUTES: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: StartComponent },
    { path: 'categories', component: CategoriesComponent, resolve: { categories: CategoriesResolve }, children: ASSIGNMENT4_MENU_ROUTES }
];