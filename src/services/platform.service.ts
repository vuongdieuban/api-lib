import { ApiConfig } from '../config';
import { Platform } from '../models/platform.model';
import { HttpService } from './http.service';

export class PlatformService {
  private readonly BASE_URL: string;
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async findAll(): Promise<Platform[]> {
    const url = `${this.BASE_URL}/platform`;
    const { data } = await this.httpService.get<Platform[]>(url);
    return data;
  }
}
