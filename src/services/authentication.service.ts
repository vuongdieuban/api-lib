import { ApiConfig } from 'src/config';
import { LoginRequest, LoginResponse, RenewTokenResponse } from 'src/dto/authentication.dto';
import { HttpService } from './http.service';

export class AuthenticationService {
  private readonly BASE_URL: string;
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async login(payload: LoginRequest): Promise<LoginResponse> {
    const url = `${this.BASE_URL}/auth/login`;
    const { data } = await this.httpService.post<LoginResponse>(url, payload);
    return data;
  }

  async logout(): Promise<string> {
    const url = `${this.BASE_URL}/auth/logout`;
    const { data } = await this.httpService.post<string>(url);
    return data;
  }

  async renewToken(): Promise<RenewTokenResponse> {
    const url = `${this.BASE_URL}/auth/renew-token`;
    const { data } = await this.httpService.post<LoginResponse>(url);
    return data;
  }
}
