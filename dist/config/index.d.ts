export declare enum OperationMode {
    DEV = "development",
    PROD = "production"
}
export declare class ApiConfig {
    private static BASE_URL;
    private static operationMode;
    private static httpService;
    static setOperationMode(mode: OperationMode): void;
    static getBaseURL(): string;
    static setAuthHeader(accessToken: string): void;
}
