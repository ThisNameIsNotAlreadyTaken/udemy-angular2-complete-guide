import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FoundItemsComponent } from './found-items/found-items.component';
import { LoaderComponent } from './loader/loader.component';
import { Assignment3Component } from './assignment3.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [Assignment3Component, FoundItemsComponent, LoaderComponent],
  bootstrap: [Assignment3Component],
  exports: [Assignment3Component]
})

export class Assignment3Module { }