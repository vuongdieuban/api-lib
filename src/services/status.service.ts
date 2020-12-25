import { Status } from '../dto/status.dto';
import { HttpService } from './http.service';
import { ApiConfig } from '../config';

export class StatusService {
  private readonly BASE_URL: string;
  private readonly httpService = HttpService;

  constructor() {
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async findAll(): Promise<Status[]> {
    const url = `${this.BASE_URL}/status`;
    const { data } = await this.httpService.get<Status[]>(url);
    return data;
  }
}
