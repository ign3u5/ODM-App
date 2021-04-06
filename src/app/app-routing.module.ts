import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterRatingComponent } from './charts/filter-rating/filter-rating.component';
import { TotalRatingsComponent } from './charts/total-ratings/total-ratings.component';
import { TotalShowTypeComponent } from './charts/total-show-type/total-show-type.component';

const routes: Routes = [
  { path: 'TotalShowType', component: TotalShowTypeComponent },
  { path: 'TotalRatings', component: TotalRatingsComponent },
  { path: 'FilterRating', component: FilterRatingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
