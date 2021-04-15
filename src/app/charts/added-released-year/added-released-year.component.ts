import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';
import { GoogleChartsOptions } from '../models/google-charts-options';

@Component({
  selector: 'app-added-released-year',
  templateUrl: './added-released-year.component.html',
  styleUrls: ['./added-released-year.component.scss']
})
export class AddedReleasedYearComponent {

  outputData: [number, number, number][];
  columns: string[];
  options: GoogleChartsOptions;

  constructor(private chartData: ChartDataService) { 
    this.columns = [`Year`, `Released Year`, `Added Year`]
    this.options = {
      title: 'A snippet of the number of shows release and added each year',
      vAxis: {
        title: 'Number of shows',
        format: 'decimal',
      },
      hAxis: {
        title: 'Year released/added',
        format: '',
      },
    };

    const releaseYearRequest = (new ChartDataRequestBuilder()).initialise('NumberOfShowsForReleaseYear').build();
    const addedYearRequest = (new ChartDataRequestBuilder()).initialise('NumberOfShowsForAddedYear').build();

    forkJoin([this.chartData.getChart(releaseYearRequest), this.chartData.getChart(addedYearRequest)]).subscribe(responseList => {
      this.outputData = new Array<[number, number, number]>();
      //1925
      for (let i = 1980; i < 2021; i++)
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
