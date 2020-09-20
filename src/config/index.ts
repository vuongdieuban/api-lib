export enum OperationMode {
  DEV,
  PROD,
}

export class ApiConfig {
  private static BASE_URL: string;
  private static operationMode: OperationMode;

  static setOperationMode(mode: OperationMode): void {
    this.operationMode = mode;
    this.BASE_URL = mode === OperationMode.DEV ? 'http://api.localhost' : 'http://prod_url';
  }

  static getBaseURL(): string {
    if (!Boolean(this.BASE_URL && this.operationMode)) {
      throw new Error('Please set operation mode before get base url');
    }
    return this.BASE_URL;
  }
}
