import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDataService } from '../../services/chart-data/chart-data.service';

@Component({
  selector: 'total-show-type',
  templateUrl: './total-show-type.component.html',
  styleUrls: ['./total-show-type.component.scss']
})
export class TotalShowTypeComponent {
  data: Promise<[string|number, string|number][]>;
  columns: string[];

  constructor(private chartData: ChartDataService) { 
    this.columns = [`Description`, `Total`];
    this.data = this.chartData.getChartData(`TotalShowType`).toPromise();
  }
}
