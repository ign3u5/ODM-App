import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ChartDataResponse } from '../models/ChartDataResponse';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private baseAddress = `http://localhost:8000/`;

  constructor(private client: HttpClient) { }

  getChart(chartName: string): Observable<ChartDataResponse> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        return new ChartDataResponse(response.body.data);
      }),
      catchError(this.handleError),
    );
  }

  getChartData(chartName: string): Observable<[string|number, string|number][]> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        var chartData = response.body.data;
        console.log(`${chartName} response data pre format: ${JSON.stringify(chartData)}`);
        var response = chartData.map((val: string[]) => [val[0], parseInt(val[1])]);
        console.log(`${chartName} response data: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError(this.handleError),
    );
  }

  getChartDataString(chartName: string): Observable<[string|number, string|number][]> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        var chartData = response.body.data;
        console.log(`${chartName} response data pre format: ${JSON.stringify(chartData)}`);
        var response = chartData;
        console.log(`${chartName} response data: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError(this.handleError),
    );
  }

  getChartDataWhere(chartName: string, where: string): Observable<[string|number, string|number][]> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName).append('WhereConstraint', where),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        var chartData = response.body.data;
        console.log(`${chartName} response data pre format: ${JSON.stringify(chartData)}`);
        var response = chartData.map((val: string[]) => [val[0], parseInt(val[1])]);
        console.log(`${chartName} response data: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError(this.handleError),
    );
  }

  getChartDataWhereString(chartName: string, where: string): Observable<string[]> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName).append('WhereConstraint', where),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        var chartData = response.body.data;
        console.log(`${chartName} response data pre format: ${JSON.stringify(chartData)}`);
        var response = chartData;
        console.log(`${chartName} response data: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError(this.handleError),
    );
  }

  getChartDataWhereAndString(chartName: string, where: string, and: string): Observable<string[]> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName).append('WhereConstraint', where).append('AndConstraint', and),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        var chartData = response.body.data;
        console.log(`${chartName} response data pre format: ${JSON.stringify(chartData)}`);
        var response = chartData;
        console.log(`${chartName} response data: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError(this.handleError),
    );
  }

  getChartDataLimit(chartName: string): Observable<[string|number, string|number][]> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        var chartData = response.body.data;
        console.log(`${chartName} response data pre format: ${JSON.stringify(chartData)}`);
        var response = chartData.map((val: string[]) => [val[0], parseInt(val[1])]);
        console.log(`${chartName} response data: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError(this.handleError),
    );
  }

  getChartDataWhereLimit(chartName: string, where: string, limit: string): Observable<[string|number, string|number][]> {
    return this.client
    .get(`${this.baseAddress}Chart.php`,
    {
      observe: 'response',
      params: this.setChartNameParam(chartName).append('WhereConstraint', where).append('Limit', limit),
    })
    .pipe(
      map((response: any) => {
        console.log(response.body.message);
        var chartData = response.body.data;
        console.log(`${chartName} response data pre format: ${JSON.stringify(chartData)}`);
        var response = chartData.map((val: string[]) => [val[0], val[1]]);
        console.log(`${chartName} response data: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError(this.handleError),
    );
  }

  private setChartNameParam(chartName: string): HttpParams {
    let httpParams = new HttpParams();
    
    httpParams = httpParams.append('ChartName', chartName);
    
    return httpParams;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`HttpDataService Error: ${error.error.message}`);
    return throwError(`An error occured`);
  }
}
