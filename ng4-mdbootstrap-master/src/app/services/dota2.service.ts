import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class dota2Service {
    constructor(private _http: HttpClient) { }

    getCurrentHero() : Observable<Ihero>{
        return this._http.get<Ihero>('https://api.pandascore.co/dota2/heroes?token=KxxfSM-rz8v7I10uMzByNF6wsDU0eQEvVNdyXENUVw3jO4kfIe8')
    }

}
export interface Ihero {
    id: number;
    localized_name: string;
    name: string;
    image_url: string;
}