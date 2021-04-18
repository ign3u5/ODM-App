import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { GoogleChartsOptions } from '../models/google-charts-options';

@Component({
  selector: 'app-yearly-total',
  templateUrl: './yearly-total.component.html',
  styleUrls: ['./yearly-total.component.scss']
})
export class YearlyTotalComponent{
  tvShowData: [string|number, string|number][];
  movieData: [string|number, string|number][];
  columns: string[];
  tvShowOptions: GoogleChartsOptions;
  movieOptions: GoogleChartsOptions;

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
    this.tvShowOptions = {
      title: 'Total TV Shows Released by Year',
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      hAxis: {
        title: `Number of TV Shows`,
      },
      vAxis: {
        title: `Release Year`,
      },
      legend: 'none',
    };

    this.movieOptions = {
      title: 'Total Movies Released by Year',
      colors: ['green'],
      hAxis: {
        title: `Number of Movies`,
      },
      vAxis: {
        title: `Release Year`,
      },
      legend: 'none',
    };
  }
}
