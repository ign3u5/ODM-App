import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../services/chart-data/chart-data.service';

@Component({
  selector: 'total-ratings',
  templateUrl: './total-ratings.component.html',
  styleUrls: ['./total-ratings.component.scss']
})
export class TotalRatingsComponent {
  data: Promise<string|number[][]>;
  columns: string[];
  options: any;

  constructor(private chartData: ChartDataService) { 
    this.columns = [`Description`, `Total`];
    this.data = this.chartData.getChartData(`TotalRatings`).toPromise();
    this.options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      hAxis: {
        title: `Rating`,
      },
      vAxis: {
        title: `Number of movies`,
      },
      legend: 'none',
    };
  }
}
