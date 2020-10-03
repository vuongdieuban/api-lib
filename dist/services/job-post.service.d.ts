import { JobPost, JobPostCreateRequest } from '../dto/job-post.dto';
export declare class JobPostService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    getOrCreate(payload: JobPostCreateRequest): Promise<JobPost>;
}
