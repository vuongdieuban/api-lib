import axios, { AxiosInstance, AxiosResponse } from 'axios';

class HttpBaseService {
  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      withCredentials:true
    });
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

  setAuthHeader(accessToken:string):void {
    this.httpClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}` 
  }
}

export const HttpService = new HttpBaseService()