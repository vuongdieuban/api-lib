import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class HttpService {
  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create();
  }

  get<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

  post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.httpClient.post<T>(url, data);
  }

  put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.httpClient.put<T>(url, data);
  }

  delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.httpClient.delete<T>(url);
  }
}
