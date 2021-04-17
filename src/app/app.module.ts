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
import { AddedReleasedYearComponent } from './charts/added-released-year/added-released-year.component';
import { PopularCastComponent } from './charts/popular-cast/popular-cast.component';
import { PopularCountriesComponent } from './charts/popular-countries/popular-countries.component';
import { MovieCountriesComponent } from './charts/movie-countries/movie-countries.component';
import { TopDirectorsComponent } from './charts/top-directors/top-directors.component';
import { AdditionalFunctionalityComponent } from './charts/additional-functionality/additional-functionality.component';

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
    AddedReleasedYearComponent,
    PopularCastComponent,
    PopularCountriesComponent,
    MovieCountriesComponent,
    TopDirectorsComponent,
    AdditionalFunctionalityComponent,
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
