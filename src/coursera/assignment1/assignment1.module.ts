import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Assignment1Component } from './assignment1.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Assignment1Component],
  bootstrap: [Assignment1Component],
  exports: [Assignment1Component]
})

export class Assignment1Module { }