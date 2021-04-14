import { Component, OnInit } from '@angular/core';
import { ChartSelectionChangedEvent } from 'angular-google-charts';
import { forkJoin } from 'rxjs';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent {
  outputData: [number, number, number][];
  columns: string[];
  
  constructor(private chartData: ChartDataService) {
    this.columns = [`Year`, `Released Year`, `Added Year`]

    const releaseYearRequest = (new ChartDataRequestBuilder()).initialise('NumberOfShowsForReleaseYear').build();
    const addedYearRequest = (new ChartDataRequestBuilder()).initialise('NumberOfShowsForAddedYear').build();

    forkJoin([this.chartData.getChart(releaseYearRequest), this.chartData.getChart(addedYearRequest)]).subscribe(responseList => {
      this.outputData = new Array<[number, number, number]>();
      for (let i = 1925; i < 2021; i++)
      {
        let releasedValue = 0;
        let addedValue = 0;

        responseList[0].StringNumber.forEach(datum => {
          if (i == parseInt(datum[0]))
          {
            releasedValue = datum[1];
          }
        });

        responseList[1].StringNumber.forEach(datum => {
          if (i == parseInt(datum[0])) {
            addedValue = datum[1];
          }
        });

        if (addedValue == 0 && releasedValue == 0)
        {
          continue;
        }

        this.outputData.push([i, releasedValue, addedValue]);
      }

      console.log(JSON.stringify(this.outputData));
    });
  }
}
