import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class MenuService {
    private static ApiBasePath: string = 'https://davids-restaurant.herokuapp.com';

    constructor(private http: Http) {
    }

    getCategories() {
        return this.http.get(MenuService.ApiBasePath + '/categories.json').map((response: Response) => response.json());
    }

    getMenuItems(category?: string) {
        const params: URLSearchParams = new URLSearchParams();

        if (category) {
            params.set('category', category);
        }

        return this.http.get(MenuService.ApiBasePath + '/menu_items.json', { search: params }).map((response: Response) => response.json());
    }
}