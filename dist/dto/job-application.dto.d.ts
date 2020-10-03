import { JobApplicationStatus } from './job-application-status.dto';
import { JobPost } from './job-post.dto';
export interface JobApplicationReorderRequest {
    position?: number;
    statusId: string;
}
export interface ApplicationUpdatedResponse {
    id: string;
    statusDisplayPosition: number;
    statusId: string;
    jobPostId: string;
    userId: string;
}
export interface JobApplicationCreateRequest {
    statusId: string;
    jobPostId: string;
    userId: string;
}
export interface JobApplication {
    id: string;
    statusDisplayPosition: number;
    status: JobApplicationStatus;
    jobPost: JobPost;
    user: {
        id: string;
        firstName: string;
        lastName: string;
    };
}
