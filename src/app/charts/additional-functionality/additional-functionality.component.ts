import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';

@Component({
  selector: 'app-additional-functionality',
  templateUrl: './additional-functionality.component.html',
  styleUrls: ['./additional-functionality.component.scss']
})
export class AdditionalFunctionalityComponent implements OnInit {

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
