import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Assignment1Component } from './assignment1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [Assignment1Component],
  bootstrap: [Assignment1Component],
  exports: [Assignment1Component]
})

export class Assignment1Module { }