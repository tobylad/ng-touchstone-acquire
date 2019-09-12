import { Component, OnInit } from '@angular/core';
import { tileTargets } from '../mock-targets';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  public tileTargets = tileTargets;

  constructor() { }

  ngOnInit() {
  }

}
