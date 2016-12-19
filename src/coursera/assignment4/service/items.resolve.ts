import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemsResolve implements Resolve<any> {

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getItemsForCategory(route.params['id']);
    }
}