import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amCharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
import { ChartDataRequestBuilder } from 'src/app/services/models/ChartDataRequest';
import { CountryCodes } from '../models/country-code';

@Component({
  selector: 'app-movie-countries',
  templateUrl: './movie-countries.component.html',
  styleUrls: ['./movie-countries.component.scss']
})
export class MovieCountriesComponent {
  chart: am4maps.MapChart;
  outputData: [string, number][];

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private chartData: ChartDataService) {
    let chartRequest = (new ChartDataRequestBuilder()).initialise('TopCountries').addLimitConstraint('2000').build();
    chartData.getChart(chartRequest).subscribe(d => {
      this.outputData = d.StringNumber;
      this.generateChart();
    });
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  generateChart() {
    this.browserOnly(() => {
      var map = am4core.create("chartdiv", am4maps.MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller();
      var polygonSeries = new am4maps.MapPolygonSeries();
      var seriesData = [];
      this.outputData.forEach(datum => {
        var seriesDatum = CountryCodes.data
        .filter(data => data.Name == datum[0])
        .map(data => ( { id: data.Code, name: data.Name, value: datum[1], fill: am4core.color("#F05C5C")}))[0];	
        if (seriesDatum)
        {
          seriesData.push(seriesDatum);
        }
      });
      console.log(`Complete series data: ${seriesData}`);
      polygonSeries.data = seriesData;

      polygonSeries.useGeodata = true;
      map.series.push(polygonSeries);

      polygonSeries.data = seriesData;
      console.log(polygonSeries.data);
      console.log("Complete");

      var tooltips = polygonSeries.mapPolygons.template;
      tooltips.tooltipText = "{name}: {value}";
      tooltips.propertyFields.fill = "fill";

      var hoverExample = tooltips.states.create("hover");
      hoverExample.properties.fill = am4core.color('#248EC6');
      this.chart = map; });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
