import { Component, OnInit, Input } from '@angular/core';

interface ITarget {
  name: string,
  revenue: string,
  margin: string,
  location: string,
  status: number
}

const statusColorMap = {
  1: "approved",
  2: "pending",
  3: "researching",
  4: "declined"
}

@Component({
  selector: 'app-tile-content',
  templateUrl: './tile-content.component.html',
  styleUrls: ['./tile-content.component.scss']
})
export class TileContentComponent implements OnInit {
  @Input() target: ITarget;

  constructor() { }

  ngOnInit() {
  }

  public getStatus(status): string {
    return "status " + statusColorMap[status];
  }

  public formatCurrency(numString): string {
    return "$" + parseInt(numString).toLocaleString();
  }

  private logger(): void {
  }

}
