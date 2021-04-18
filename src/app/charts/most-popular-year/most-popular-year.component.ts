import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';

@Component({
  selector: 'app-most-popular-year',
  templateUrl: './most-popular-year.component.html',
  styleUrls: ['./most-popular-year.component.scss']
})
export class MostPopularYearComponent implements OnInit {

  outputData: string;
  popularReleaseYear: string[];
  showData: [string, string][];

  constructor(chartData: ChartDataService) { 
    let popularYearRequest = (new ChartDataRequestBuilder()).initialise(`MostPopularYear`).build();
    let showDataRequestBuilder = (new ChartDataRequestBuilder()).initialise(`ShowsFromReleaseYear`);
    chartData.getChart(popularYearRequest).subscribe(d => {
      this.popularReleaseYear = d.StringString[0];
      chartData.getChart(showDataRequestBuilder.addWhereConstraint(this.popularReleaseYear[0]).build()).subscribe(d => {
        this.showData = d.StringString;
      })
    });
  }
  ngOnInit(): void {
  }

}
