import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class MenuSearchService {
    constructor(private http: Http) {}

    getMatchedMenuItems(searchTerm: string) {
        return this.http.get('https://davids-restaurant.herokuapp.com/menu_items.json')
        .map((response: Response) => response.json().menu_items)
        .map((items: any[]) => items.filter((item: any) => item.description.toLowerCase().indexOf(searchTerm) !== -1));
    };
}