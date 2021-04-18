import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';

@Component({
  selector: 'app-average-duration',
  templateUrl: './average-duration.component.html',
  styleUrls: ['./average-duration.component.scss']
})
export class AverageDurationComponent   {
  tvShowData: [string|number, string|number][];
  movieData: [string|number, string|number][];
  columns: string[];
  tvShowOptions: any;
  movieOptions: any;

  averageTvShowDuration: string;
  averageMovieDuration: string;

  constructor(private chartData: ChartDataService) { 
    let averageTvShowDurationRequest = (new ChartDataRequestBuilder())
    .initialise(`AverageDuration`).addWhereConstraint(`TV Show`).build();

    let averageMovieDurationRequest = (new ChartDataRequestBuilder())
    .initialise(`AverageDuration`).addWhereConstraint(`Movie`).build();

    this.chartData.getChart(averageTvShowDurationRequest).subscribe(d => {
      this.averageTvShowDuration = d.StringArray[0];
    });

    this.chartData.getChart(averageMovieDurationRequest).subscribe(d => {
      this.averageMovieDuration = d.StringArray[0];
    });

    this.columns = [`Description`, `Total`];
    this.chartData.getChartDataWhere(`DurationFrequency`, `TV Show`).subscribe(
      d => {
        this.tvShowData = d;
      }
    );
    this.chartData.getChartDataWhere(`DurationFrequency`, `Movie`).subscribe(
      d => {
        this.movieData = d;
      }
    );
    this.tvShowOptions = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      title: 'Frequency of Particular Durations of TV Shows',
      hAxis: {
        title: `Duration (seasons)`,
      },
      vAxis: {
        title: `Number of TV Shows`,
      },
      legend: 'none',
    };
    this.movieOptions = {
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        title: 'Frequency of Parituclar Duration of Movies',
        hAxis: {
          title: `Duration (mins)`,
        },
        vAxis: {
          title: `Number of Movies`,
        },
        legend: 'none',
    };
}

}
