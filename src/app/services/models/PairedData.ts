import { ChartDataResponse } from "./ChartDataResponse";

export class PairedData implements ChartDataResponse {
    descriptor: string;
    value: string;

    constructor(private data: ChartDataResponse) {
        this.descriptor = data.descriptor;
        this.value = data.value;
    }

    mapToArray(): string[] {
        return [this.descriptor, this.value];
    }
}