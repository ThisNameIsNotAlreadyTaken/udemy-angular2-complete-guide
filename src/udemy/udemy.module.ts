import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./shared/header.component";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";

import { ShoppingListComponent } from "./shopping/shopping-list.component";
import { ShoppingListAddComponent } from "./shopping/shopping-list-add.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent],
  bootstrap: [RecipeBookAppComponent]
})

export class UdemyModule { }