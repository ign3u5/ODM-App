import { HttpParams } from '@angular/common/http';

export class ChartDataRequest {
    requestParams: HttpParams;

    constructor(ChartName: string) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('ChartName', ChartName);
        this.requestParams = httpParams;
    }
}

export class ChartDataRequestBuilder {
    private chartDataRequest: ChartDataRequest;
    private whereConstraintCounter: number;

    initialise(chartName: string): ChartDataRequestBuilder {
        this.chartDataRequest = new ChartDataRequest(chartName);
        this.whereConstraintCounter = 0;
        return this;
    }

    addWhereConstraint(constraint: string): ChartDataRequestBuilder {
        if (this.whereConstraintCounter == 0) {
            this.chartDataRequest.requestParams.append(`WhereConstraint`, constraint);
        }
        if (this.whereConstraintCounter == 1) {
            this.chartDataRequest.requestParams.append(`AndConstraint`, constraint);
        }
        this.whereConstraintCounter++;
        return this;
    }

    addLimitConstraint(constraint: string): ChartDataRequestBuilder {
        this.chartDataRequest.requestParams.append(`Limit`, constraint);
        return this;
    }

    build(): ChartDataRequest {
        return this.chartDataRequest;
    }

}
