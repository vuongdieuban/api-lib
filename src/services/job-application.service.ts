import { ApiConfig } from '../config';
import {
  ApplicationUpdatedResponse,
  JobApplication,
  JobApplicationCreateRequest,
  JobApplicationReorderRequest,
} from '../models/job-application.model';
import { HttpService } from './http.service';

export class JobApplicationService {
  private readonly BASE_URL: string;
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async findAll(): Promise<JobApplication[]> {
    const url = `${this.BASE_URL}/job-application`;
    const { data } = await this.httpService.get<JobApplication[]>(url);
    return data;
  }

  async create(payload: JobApplicationCreateRequest): Promise<JobApplication> {
    const url = `${this.BASE_URL}/job-application`;
    const { data } = await this.httpService.post<JobApplication>(url, payload);
    return data;
  }

  async reorder(id: string, payload: JobApplicationReorderRequest): Promise<ApplicationUpdatedResponse> {
    const url = `${this.BASE_URL}/job-application/reorder/${id}`;
    const { data } = await this.httpService.put<ApplicationUpdatedResponse>(url, payload);
    return data;
  }

  async archive(id: string): Promise<ApplicationUpdatedResponse> {
    const url = `${this.BASE_URL}/job-application/${id}`;
    const { data } = await this.httpService.delete<ApplicationUpdatedResponse>(url);
    return data;
  }
}
