import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assignment2Component } from './assignment2.component';
import { ToBuyComponent } from './toBuy/toBuy.component';
import { BoughtComponent } from './bought/bought.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Assignment2Component, ToBuyComponent, BoughtComponent],
  bootstrap: [Assignment2Component],
  exports: [Assignment2Component]
})

export class Assignment2Module { }