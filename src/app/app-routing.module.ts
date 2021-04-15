import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddedReleasedYearComponent } from './charts/added-released-year/added-released-year.component';
import { AverageDurationComponent } from './charts/average-duration/average-duration.component';
import { FilterRatingComponent } from './charts/filter-rating/filter-rating.component';
import { PopularCastComponent } from './charts/popular-cast/popular-cast.component';
import { TestChartComponent } from './charts/test-chart/test-chart.component';
import { TotalRatingsComponent } from './charts/total-ratings/total-ratings.component';
import { TotalShowTypeComponent } from './charts/total-show-type/total-show-type.component';
import { YearlyTotalComponent } from './charts/yearly-total/yearly-total.component';

const routes: Routes = [
  { path: 'TotalShowType', component: TotalShowTypeComponent },
  { path: 'TotalRatings', component: TotalRatingsComponent },
  { path: 'FilterRating', component: FilterRatingComponent },
  { path: 'YearlyTotal', component: YearlyTotalComponent },
  { path: 'AverageDuration', component: AverageDurationComponent },
  { path: 'AddedReleasedYear', component: AddedReleasedYearComponent},
  { path: 'PopularCast', component: PopularCastComponent },
  { path: 'Test', component: TestChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
