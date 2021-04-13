import { Component } from '@angular/core';
import { ChartSelectionChangedEvent } from 'angular-google-charts';
import { Observable } from 'rxjs';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { PieChartOptions } from 'src/app/services/models/pieChartOptions';

@Component({
  selector: 'app-filter-rating',
  templateUrl: './filter-rating.component.html',
  styleUrls: ['./filter-rating.component.scss']
})
export class FilterRatingComponent {
  ratingData: [string|number, string|number][];

  tableData: string[];

  constructor(private chartData: ChartDataService) {
    this.chartData.getChartData(`TotalRatings`).subscribe({
      next: data => {
        this.ratingData = data;
      }
    });

   }

  onSelect(event: ChartSelectionChangedEvent) {
    console.log(JSON.stringify(this.ratingData[event.selection[0].row]));
    this.chartData.getChartDataWhereString(`Test`, this.ratingData[event.selection[0].row][0].toString()).subscribe({
      next: data => {
        this.tableData = data;
      }
    });
  }
}
