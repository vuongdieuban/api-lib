import { JobApplicationStatus } from '../models/job-application-status.model';
export declare class JobApplicationStatusService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<JobApplicationStatus[]>;
}
