export declare enum OperationMode {
    DEV = "development",
    PROD = "production"
}
export declare class ApiConfig {
    private static BASE_URL;
    private static operationMode;
    static setOperationMode(mode: OperationMode): void;
    static getBaseURL(): string;
}
