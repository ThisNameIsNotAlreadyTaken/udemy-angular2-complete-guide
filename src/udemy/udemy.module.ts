import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from "@angular/router";

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./shared/header.component";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipes-start.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

import { ShoppingListComponent } from "./shopping/shopping-list.component";
import { ShoppingListAddComponent } from "./shopping/shopping-list-add.component";

import { DropdownDirective } from "./shared/dropdown.directive";

import { ShoppingListService } from './shopping/shopping-list.service';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective],
  bootstrap: [RecipeBookAppComponent],
  providers: [ShoppingListService],
  exports: [RecipeBookAppComponent]
})

export class UdemyModule { }