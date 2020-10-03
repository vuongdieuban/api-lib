import { JobApplicationStatus } from '../dto/job-application-status.dto';
export declare class JobApplicationStatusService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<JobApplicationStatus[]>;
}
