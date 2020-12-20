import { HttpService } from '../services/http.service';

export enum OperationMode {
  DEV = 'development',
  PROD = 'production',
}

export class ApiConfig {
  private static BASE_URL: string;
  private static operationMode: OperationMode;
  private static httpService = HttpService;

  static setOperationMode(mode: OperationMode): void {
    this.operationMode = mode;
    this.BASE_URL = mode === OperationMode.DEV ? 'http://localhost:5000' : 'http://prod_url';
  }

  static getBaseURL(): string {
    if (!Boolean(this.BASE_URL && this.operationMode)) {
      throw new Error('Please set operation mode before get base url');
    }
    return this.BASE_URL;
  }

  static setAuthHeader(accessToken: string): void {
    this.httpService.setAuthHeader(accessToken);
  }
}
