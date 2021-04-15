import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';
import { GoogleChartsOptions } from '../models/google-charts-options';

@Component({
  selector: 'app-popular-cast',
  templateUrl: './popular-cast.component.html',
  styleUrls: ['./popular-cast.component.scss']
})
export class PopularCastComponent implements OnInit {

  outputData: [string, number][];
  options: GoogleChartsOptions;

  constructor(chartData: ChartDataService) {
    this.options = {
      title: 'Top Actors by Total Number of Appearances'
    }
    let chartRequest = (new ChartDataRequestBuilder).initialise('TopActors').addLimitConstraint('10').build();
    chartData.getChart(chartRequest).subscribe(d => {
      this.outputData = d.StringNumber;
    });
  }

  ngOnInit(): void {
  }

}
