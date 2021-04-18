import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';

@Component({
  selector: 'app-total-hours',
  templateUrl: './total-hours.component.html',
  styleUrls: ['./total-hours.component.scss']
})
export class TotalHoursComponent implements OnInit {

  totalHoursAvailable: string;
  topDurationMovies: [string, number][];

  constructor(chartData: ChartDataService) { 
    let totalHoursRequest = (new ChartDataRequestBuilder()).initialise(`TotalHours`).build();
    let topDurationMovies = (new ChartDataRequestBuilder()).initialise(`HighestDurationFilms`).build();
    chartData.getChart(totalHoursRequest).subscribe(d => {
      this.totalHoursAvailable = d.StringArray[0];
    });
    chartData.getChart(topDurationMovies).subscribe(d => {
      this.topDurationMovies = d.StringNumber;
    });
  }

  ngOnInit(): void {
  }

}
