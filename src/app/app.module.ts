import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalShowTypeComponent } from './charts/total-show-type/total-show-type.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { TotalRatingsComponent } from './charts/total-ratings/total-ratings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FilterRatingComponent } from './charts/filter-rating/filter-rating.component';
import { YearlyTotalComponent } from './charts/yearly-total/yearly-total.component';
import { AverageDurationComponent } from './charts/average-duration/average-duration.component';
import { TestChartComponent } from './charts/test-chart/test-chart.component';
import { TableComponent } from './elements/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TotalShowTypeComponent,
    TotalRatingsComponent,
    NavigationComponent,
    FilterRatingComponent,
    YearlyTotalComponent,
    AverageDurationComponent,
    TestChartComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
