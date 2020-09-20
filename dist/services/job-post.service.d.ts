import { JobPost, JobPostCreateRequest } from '../models/job-post.model';
export declare class JobPostService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    getOrCreate(payload: JobPostCreateRequest): Promise<JobPost>;
}
