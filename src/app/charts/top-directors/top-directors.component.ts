import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';
import { ChartSelectionChangedEvent } from 'angular-google-charts';

@Component({
  selector: 'app-top-directors',
  templateUrl: './top-directors.component.html',
  styleUrls: ['./top-directors.component.scss']
})
export class TopDirectorsComponent implements OnInit {

  outputData: [string, number][];
  tableData: string[];

  constructor(private chartData: ChartDataService) {
    let chartRequest = (new ChartDataRequestBuilder()).initialise('TopDirectors').build();
    chartData.getChart(chartRequest).subscribe(d => {
      this.outputData = d.StringNumber;
    });
  }

  ngOnInit(): void {
  }

  onSelect(event: ChartSelectionChangedEvent): void {
    this.chartData.getChartDataWhereString('FilmsByDirector', this.outputData[event.selection[0].row][0]).subscribe(d => {
      this.tableData = d;
      console.log('On Select has happened');
    })
  }

}
