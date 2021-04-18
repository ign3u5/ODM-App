export class ChartDataResponse {
    constructor (private responseData: any) {}

    get StringString(): [string, string][] {
        return this.responseData;
    }

    get StringNumber(): [string, number][] {
        return this.responseData.map(d => [d[0], parseInt(d[1])]);
    }

    get StringArray(): string[] {
        return this.responseData.map(d => d[0]);
    }
}