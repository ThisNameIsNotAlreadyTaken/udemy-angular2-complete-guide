import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Assignment4Component } from './assignment4.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [Assignment4Component],
  bootstrap: [Assignment4Component],
  exports: [Assignment4Component]
})

export class Assignment4Module { }