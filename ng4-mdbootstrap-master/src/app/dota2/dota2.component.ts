import { Component, OnInit } from '@angular/core';
import { dota2Service, Ihero} from '../services/dota2.service';
@Component({
  selector: 'app-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.scss']
})
export class Dota2Component implements OnInit {
  data: Ihero;

  constructor() { }

  ngOnInit() {
  }

}
