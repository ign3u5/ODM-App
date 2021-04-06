import { Component } from '@angular/core';
import { ChartSelectionChangedEvent } from 'angular-google-charts';
import { Observable } from 'rxjs';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';

@Component({
  selector: 'app-filter-rating',
  templateUrl: './filter-rating.component.html',
  styleUrls: ['./filter-rating.component.scss']
})
export class FilterRatingComponent {
  data: string|number[][];
  columns: string[];
  options: any;
  controlOptions: any;
  filmColumns = ["Title", "Rating"];
  filmOptions: any;
  filmData: string|number[][];
  filterRatings: (string|number)[];

  constructor(private chartData: ChartDataService) { 
    this.columns = [`Description`, `Total`];
    this.chartData.getChartData(`TotalRatings`).subscribe(
      val => {
        this.data = val;
      }
    );
    this.options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      hAxis: {
        title: `Rating`,
      },
      vAxis: {
        title: `Number of movies`,
      },
      legend: 'none',
    };
    this.controlOptions = {
      filterColumnLabel: 'Total'
    }
  }

  displayTopFilmsForRating($selectedRatings: ChartSelectionChangedEvent) {
    console.log(JSON.stringify($selectedRatings.selection));
    this.filterRatings = $selectedRatings.selection.map(val => this.data[val.row][0]);
    console.log(JSON.stringify(this.filterRatings));
  }

  filterFilms() {
    if (this.filterRatings)
    {
      this.chartData.getChartDataWhereLimit('TopFilmsForRating', this.filterRatings[0].toString(), "10").subscribe(val => {
        this.filmData = val;
      });
    }
  }
}
