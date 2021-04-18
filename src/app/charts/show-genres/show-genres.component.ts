import { Component, OnInit } from '@angular/core';
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
  options: GoogleChartsOptions;

  constructor(chartData: ChartDataService) { 
    this.options = {
      title: 'Top Genres based on total shows'
    };
    let topGenresRequest = (new ChartDataRequestBuilder()).initialise(`TopGenres`).addLimitConstraint(`10`).build();
    chartData.getChart(topGenresRequest).subscribe(d => {
      this.outputData = d.StringNumber;
    })
  }

  ngOnInit(): void {
  }

}
