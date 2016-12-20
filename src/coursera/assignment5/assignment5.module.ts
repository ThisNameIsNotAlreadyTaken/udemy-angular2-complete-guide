import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { MyInfoComponent } from './myinfo/myinfo.component';
import { SignUpComponent } from './signup/signup.component';
import { StartComponent } from './start/start.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { LoadingComponent } from './loading/loading.component';
import { Assignment5Component } from './assignment5.component';

import { UserInfoService } from './service/userinfo.service';
import { MenuService } from './service/menu.service';
import { UserInfoResolve } from './service/userinfo.resolve';
import { ItemsResolve } from './service/items.resolve';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, ReactiveFormsModule],
  declarations: [Assignment5Component, HeaderComponent, MyInfoComponent, SignUpComponent, StartComponent, MenuItemComponent, LoadingComponent],
  bootstrap: [Assignment5Component],
  exports: [Assignment5Component],
  providers: [UserInfoService, MenuService, UserInfoResolve, ItemsResolve]
})

export class Assignment5Module { }