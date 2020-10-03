import { JobApplicationStatus } from '../dto/job-application-status.dto';
import { HttpService } from './http.service';
import { ApiConfig } from '../config';

export class JobApplicationStatusService {
  private readonly BASE_URL: string;
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async findAll(): Promise<JobApplicationStatus[]> {
    const url = `${this.BASE_URL}/job-application-status`;
    const { data } = await this.httpService.get<JobApplicationStatus[]>(url);
    return data;
  }
}
