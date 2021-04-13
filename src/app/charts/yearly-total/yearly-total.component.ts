import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';

@Component({
  selector: 'app-yearly-total',
  templateUrl: './yearly-total.component.html',
  styleUrls: ['./yearly-total.component.scss']
})
export class YearlyTotalComponent{
  tvShowData: [string|number, string|number][];
  movieData: [string|number, string|number][];
  columns: string[];
  options: any;

  constructor(private chartData: ChartDataService) { 
    this.columns = [`Description`, `Total`];
    this.chartData.getChartData(`TotalTvShowsForReleaseYears`).subscribe(
      d => {
        this.tvShowData = d;
      }
    );
    this.chartData.getChartData(`TotalMoviesForReleaseYears`).subscribe(
      d => {
        this.movieData = d;
      }
    );
    this.options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      hAxis: {
        title: `Release year`,
      },
      vAxis: {
        title: `Number of shows`,
      },
      legend: 'none',
    };
  }
}
