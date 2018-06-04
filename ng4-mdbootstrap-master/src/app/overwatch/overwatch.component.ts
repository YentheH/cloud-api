import { Component, OnInit } from '@angular/core';
import { overwatchService, IheroOverwatch} from '../services/overwatch.service';


@Component({
  selector: 'app-overwatch',
  templateUrl: './overwatch.component.html',
  styleUrls: ['./overwatch.component.scss']
})
export class OverwatchComponent implements OnInit {
  hero: IheroOverwatch;

  constructor(private _svc : overwatchService) { }

  ngOnInit() { 
    this._svc.getCurrentHeroOverwatch()
            .subscribe(result => this.hero = result);

  }

}
