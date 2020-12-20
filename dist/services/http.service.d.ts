import { AxiosResponse } from 'axios';
declare class HttpBaseService {
    private readonly httpClient;
    constructor();
    get<T>(url: string): Promise<AxiosResponse<T>>;
    post<T>(url: string, data?: any): Promise<AxiosResponse<T>>;
    put<T>(url: string, data: any): Promise<AxiosResponse<T>>;
    delete<T>(url: string): Promise<AxiosResponse<T>>;
    setAuthHeader(accessToken: string): void;
}
export declare const HttpService: HttpBaseService;
export {};
