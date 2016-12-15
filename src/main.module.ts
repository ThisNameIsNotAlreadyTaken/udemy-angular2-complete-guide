import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UdemyModule } from './udemy/udemy.module';
import { CourseraModule } from './coursera/coursera.module';
import { AppRoutingModule } from './main.routing';

import { MainComponent } from "./main.component";
import { MainMenuComponent } from "./main-menu.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, UdemyModule, CourseraModule],
  declarations: [MainComponent, MainMenuComponent],
  bootstrap: [MainComponent],
})

export class MainModule { }