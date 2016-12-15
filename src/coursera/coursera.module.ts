import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from "@angular/router";

import { CourseraComponent } from './coursera.component';
import { CourseraMenuComponent } from './coursera-menu.component';

import { Assignment1Module } from './assignment1/assignment1.module';
import { Assignment2Module } from './assignment2/assignment2.module';
import { Assignment3Module } from './assignment3/assignment3.module';
import { Assignment4Module } from './assignment4/assignment4.module';
import { Assignment5Module } from './assignment5/assignment5.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, Assignment1Module, Assignment2Module, Assignment3Module, Assignment4Module, Assignment5Module],
  declarations: [CourseraComponent, CourseraMenuComponent],
  bootstrap: [CourseraComponent],
  exports: [CourseraComponent]
})

export class CourseraModule { }