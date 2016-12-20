import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MenuService } from './menu.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemsResolve implements Resolve<any> {

    constructor(private dataService: MenuService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getMenuItems(route.params['id']);
    }
}