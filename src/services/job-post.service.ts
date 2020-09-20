import { JobPost, JobPostCreateRequest } from '../models/job-post.model';
import { HttpService } from './http.service';
import { ApiConfig } from '../config';

export class JobPostService {
  private readonly BASE_URL: string;
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async getOrCreate(payload: JobPostCreateRequest): Promise<JobPost> {
    const url = `${this.BASE_URL}/job-post`;
    const { data } = await this.httpService.post<JobPost>(url, payload);
    return data;
  }
}
