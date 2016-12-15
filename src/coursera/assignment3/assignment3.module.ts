import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Assignment3Component } from './assignment3.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [Assignment3Component],
  bootstrap: [Assignment3Component],
  exports: [Assignment3Component]
})

export class Assignment3Module { }