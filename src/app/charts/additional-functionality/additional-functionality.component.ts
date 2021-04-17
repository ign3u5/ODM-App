import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';

@Component({
  selector: 'app-additional-functionality',
  templateUrl: './additional-functionality.component.html',
  styleUrls: ['./additional-functionality.component.scss']
})
export class AdditionalFunctionalityComponent implements OnInit {

  outputData: string;

  constructor(chartData: ChartDataService) { 

  }

  ngOnInit(): void {
  }

}
