import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './menu/categories.component';
import { CategoriesListComponent } from './menu/categories-list.component';
import { ItemsListComponent } from './menu/items-list.component';
import { StartComponent } from './start/start.component';

import { DataService } from './service/data.service';
import { CategoriesResolve } from './service/categories.resolve';
import { ItemsResolve } from './service/items.resolve';

import { Assignment4Component } from './assignment4.component';

@NgModule({
  imports: [CommonModule, RouterModule, HttpModule],
  declarations: [Assignment4Component, SpinnerComponent, HeaderComponent, CategoriesComponent, CategoriesListComponent, ItemsListComponent, StartComponent],
  bootstrap: [Assignment4Component],
  exports: [Assignment4Component],
  providers: [DataService, CategoriesResolve, ItemsResolve]
})

export class Assignment4Module { }