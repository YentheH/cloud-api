import { Component, OnInit } from '@angular/core';
import { lolService, Ichampion} from '../services/lol.service';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.scss']
})
export class LolComponent implements OnInit {
  data: Ichampion;
  constructor() { }

  ngOnInit() {
  }

}
