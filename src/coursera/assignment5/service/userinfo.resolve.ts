import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserInfoService } from './userinfo.service';

@Injectable()
export class UserInfoResolve implements Resolve<any> {

  constructor(private userInfoService: UserInfoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userInfoService.getInfo();
  }
}