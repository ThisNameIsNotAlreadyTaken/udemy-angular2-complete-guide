import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { MainMenuComponent} from './main-menu.component';
import { CourseraComponent } from './coursera/coursera.component';
import { RecipeBookAppComponent } from './udemy/recipe-book.component';

import { COURSERA_ROUTES } from './coursera/coursera.routing';
import { UDEMY_ROUTES } from './udemy/udemy.routing';

export const ROUTES: Routes = [
    { path: '', component: MainMenuComponent, pathMatch: 'full' },
    { path: 'udemy', component: RecipeBookAppComponent, children: UDEMY_ROUTES },
    { path: 'coursera', component: CourseraComponent, children: COURSERA_ROUTES }
];

/* TODO: change app_base_href to variable */

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/udemy-angular2/' }]
})

export class AppRoutingModule {}