import { ApplicationUpdatedResponse, JobApplication, JobApplicationCreateRequest, JobApplicationReorderRequest } from '../models/job-application.model';
export declare class JobApplicationService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<JobApplication[]>;
    create(payload: JobApplicationCreateRequest): Promise<JobApplication>;
    reorder(id: string, payload: JobApplicationReorderRequest): Promise<ApplicationUpdatedResponse>;
    archive(id: string): Promise<ApplicationUpdatedResponse>;
}
