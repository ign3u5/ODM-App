import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';

@Component({
  selector: 'app-average-duration',
  templateUrl: './average-duration.component.html',
  styleUrls: ['./average-duration.component.scss']
})
export class AverageDurationComponent   {
  tvShowData: string|number[][];
  movieData: string|number[][];
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
        title: `Rating`,
      },
      vAxis: {
        title: `Number of movies`,
      },
      legend: 'none',
  };
}

}
