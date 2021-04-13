import { Component, OnInit } from '@angular/core';
import { ChartSelectionChangedEvent } from 'angular-google-charts';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { PieChartOptions } from 'src/app/services/models/pieChartOptions';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent implements OnInit {
  ratingData: [string|number, string|number][];
  showType: ShowType;
  currentFilter: string;
  showRatingData: boolean;
  showTableData: boolean;

  tableData: string[];

  constructor(private chartData: ChartDataService) {
    this.showRatingData = false;
    this.showTableData = false;
    this.showType = ShowType.All;
    this.chartData.getChartData(`TotalRatings`).subscribe({
      next: data => {
        this.ratingData = data;
        this.showRatingData = true;
      }
    });
   }

   onNoFilter() {
      this.showTableData = false;
      this.tableData = null;
      this.chartData.getChartData(`TotalRatings`).subscribe({
        next: data => {
          this.ratingData = data;
          this.showRatingData = true;
        }
      });
   }

  onJustMovies() {
    this.showType = ShowType.Movie;
    this.showRatingData = false;
    this.chartData.getChartDataWhere(`TotalRatingsByShowType`, `Movie`).subscribe({
      next: data => {
        this.ratingData = data;
        this.showRatingData = true;
      }
    });
    if (this.tableData && this.currentFilter) {
      this.getShowsOfType(`Movie`);
    }
  }

  onJustTvShows() {
    this.showType = ShowType.TvShow;
    this.showRatingData = false;
    this.chartData.getChartDataWhere(`TotalRatingsByShowType`, `TV Show`).subscribe({
      next: data => {
        this.ratingData = data;
        this.showRatingData = true;
      }
    });
    if (this.tableData && this.currentFilter) {
      this.getShowsOfType(`TV Show`);
    }
  }

  onSelect(event: ChartSelectionChangedEvent) {
    console.log(JSON.stringify(this.ratingData[event.selection[0].row]));
    this.currentFilter = this.ratingData[event.selection[0].row][0].toString();
    switch (this.showType)
    {
      case ShowType.All:
        this.getAllShows();
        break;
      case ShowType.Movie:
        this.getShowsOfType(`Movie`);
        break;
      case ShowType.TvShow:
        this.getShowsOfType(`TV Show`);
        break;
    }
  }

  private getAllShows() {
    this.showTableData = false;
    this.chartData.getChartDataWhereString(`Test`, this.currentFilter).subscribe({
      next: data => {
        this.tableData = data;
        this.showTableData = true;
      }
    });
  }

  private getShowsOfType(showType: string) {
    this.showTableData = false;
    this.chartData.getChartDataWhereAndString(`Test2`, this.currentFilter, showType).subscribe({
      next: data => {
        this.tableData = data;
        this.showTableData = true;
      }
    });
  }

  ngOnInit(): void {
  }

}

enum ShowType {
  TvShow,
  Movie,
  All
}
