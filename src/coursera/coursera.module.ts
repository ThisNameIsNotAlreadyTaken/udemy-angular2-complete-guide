import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CourseraComponent } from './coursera.component';
import { Assignment1Component } from './assignment1/assignment1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [CourseraComponent, Assignment1Component],
  bootstrap: [CourseraComponent]
})

export class CourseraModule { }