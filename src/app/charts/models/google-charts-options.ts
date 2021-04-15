export interface GoogleChartsOptions {
    colors?: string[];
    hAxis?: GoogleChartsOptionsAxis;
    vAxis?: GoogleChartsOptionsAxis;
    legend?: string;
    title?: string;
    width?: number;
    height?: number;
}

export interface GoogleChartsOptionsAxis {
    title?: string;
    format?: string;
}
