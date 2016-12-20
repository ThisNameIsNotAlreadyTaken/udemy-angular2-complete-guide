import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';

import { ASSIGNMENT4_ROUTES } from './assignment4/assignment4.routing';
import { ASSIGNMENT5_ROUTES } from './assignment5/assignment5.routing';

export const COURSERA_ROUTES: Routes = [
    { path: '', redirectTo: 'assignment1',  pathMatch: 'full' },
    { path: 'assignment1', component: Assignment1Component },
    { path: 'assignment2', component: Assignment2Component },
    { path: 'assignment3', component: Assignment3Component },
    { path: 'assignment4', component: Assignment4Component, children: ASSIGNMENT4_ROUTES },
    { path: 'assignment5', component: Assignment5Component, children: ASSIGNMENT5_ROUTES }
];