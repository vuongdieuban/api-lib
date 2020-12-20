import { JobApplicationReorderedResponse, JobApplicationUpdatedResponse, JobApplication, JobApplicationCreateRequest, JobApplicationReorderRequest } from '../dto/job-application.dto';
export declare class JobApplicationService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<JobApplication[]>;
    create(payload: JobApplicationCreateRequest): Promise<JobApplication>;
    reorder(id: string, payload: JobApplicationReorderRequest): Promise<JobApplicationReorderedResponse>;
    archive(id: string, archive: boolean): Promise<JobApplicationUpdatedResponse>;
}
