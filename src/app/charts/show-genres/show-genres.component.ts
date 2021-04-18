import { Component, OnInit } from '@angular/core';
import { ChartSelectionChangedEvent } from 'angular-google-charts';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';
import { GoogleChartsOptions } from '../models/google-charts-options';

@Component({
  selector: 'app-show-genres',
  templateUrl: './show-genres.component.html',
  styleUrls: ['./show-genres.component.scss']
})
export class ShowGenresComponent implements OnInit {

  outputData: [string, number][];
  genreMovies: [string, string][];
  options: GoogleChartsOptions;

  constructor(private chartData: ChartDataService) { 
    this.options = {
      title: 'Top Genres based on total shows'
    };
    let topGenresRequest = (new ChartDataRequestBuilder()).initialise(`TopGenres`).addLimitConstraint(`10`).build();
    chartData.getChart(topGenresRequest).subscribe(d => {
      this.outputData = d.StringNumber;
    })
  }

  onSelect(event: ChartSelectionChangedEvent) {
    let genreMoviesRequest = (new ChartDataRequestBuilder())
      .initialise(`MoviesForGenre`)
      .addWhereConstraint(this.outputData[event.selection[0].row][0]).build();
    this.chartData.getChart(genreMoviesRequest).subscribe(d => {
      this.genreMovies = d.StringString;
    });
  }

  ngOnInit(): void {
  }

}
