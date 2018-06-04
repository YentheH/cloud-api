import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class lolService {
    constructor(private _http: HttpClient) { }

    getCurrentChampion() : Observable<Ichampion>{
        return this._http.get<Ichampion>('https://api.pandascore.co/lol/champions.json?token=KxxfSM-rz8v7I10uMzByNF6wsDU0eQEvVNdyXENUVw3jO4kfIe8')
    }

}

export interface Ichampion {
        id: number;
        name: string;
        armor: number;
        armorperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackrange: number;
        attackspeedoffset: number;
        attackspeedperlevel: number;
        crit: number;
        critperlevel: number;
        hp: number;
        hpperlevel: number;
        hpregen: number;
        hpregenperlevel: number;
        movespeed: number;
        mp: number;
        mpperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        image_url: string;
        big_image_url: string;
}



