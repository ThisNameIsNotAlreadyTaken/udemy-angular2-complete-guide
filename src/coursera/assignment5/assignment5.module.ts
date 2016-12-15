import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Assignment5Component } from './assignment5.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [Assignment5Component],
  bootstrap: [Assignment5Component],
  exports: [Assignment5Component]
})

export class Assignment5Module { }