import { HttpParams } from '@angular/common/http';

export class ChartDataRequest {
    requestParams: HttpParams;

    constructor(ChartName: string) {
        this.requestParams = new HttpParams();
        this.appendParams('ChartName', ChartName);
    }

    appendParams(key: string, value: string): void {
        this.requestParams  = this.requestParams.append(key, value);
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
            this.chartDataRequest.appendParams(`WhereConstraint`, constraint);
        }
        if (this.whereConstraintCounter == 1) {
            this.chartDataRequest.appendParams(`AndConstraint`, constraint);
        }
        this.whereConstraintCounter++;
        return this;
    }

    addLimitConstraint(constraint: string): ChartDataRequestBuilder {
        this.chartDataRequest.appendParams(`Limit`, constraint);
        return this;
    }

    build(): ChartDataRequest {
        return this.chartDataRequest;
    }

}
