import { Routes } from "@angular/router";

import { ItemsListComponent } from "./items-list.component";
import { ItemsResolve } from "../service/items.resolve";

export const ASSIGNMENT4_MENU_ROUTES: Routes = [
    {
        path: ':id', component: ItemsListComponent, resolve: { itemsData: ItemsResolve }
    }
];