import { Component, OnInit } from '@angular/core';
import { footerData } from '../footer-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerItems = footerData;

  constructor() { }

  ngOnInit() {
  }

}
