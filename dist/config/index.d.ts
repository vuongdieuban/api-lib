export declare enum OperationMode {
    DEV = 0,
    PROD = 1
}
export declare class ApiConfig {
    private static BASE_URL;
    private static operationMode;
    static setOperationMode(mode: OperationMode): void;
    static getBaseURL(): string;
}
