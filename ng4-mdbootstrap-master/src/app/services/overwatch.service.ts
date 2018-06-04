import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class overwatchService {
    constructor(private _http: HttpClient) { }

    getCurrentHeroOverwatch() : Observable<IheroOverwatch>{
        return this._http.get<IheroOverwatch>('https://api.pandascore.co/ow/heroes?token=KxxfSM-rz8v7I10uMzByNF6wsDU0eQEvVNdyXENUVw3jO4kfIe8')
    }

}
export interface IheroOverwatch {
    id: number;
    name: string;
    role: string;
    difficulty: number;
    real_name: string;
    slug: string;
    image_url: string;
    portrait_url: string;
}