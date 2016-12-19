import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class DataService {
    private static ApiBasePath: string = 'https://davids-restaurant.herokuapp.com';

    constructor(private http: Http) {
    }

    getAllCategories() {
        return this.http.get(DataService.ApiBasePath + '/categories.json').map((response: Response) => response.json());
    }

    getItemsForCategory(categoryShortName: string) {
        const params: URLSearchParams = new URLSearchParams();
        params.set('category', categoryShortName);

        return this.http.get(DataService.ApiBasePath + '/menu_items.json', { search: params }).map((response: Response) => response.json());
    }
}