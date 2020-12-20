import { Status } from './status.dto';
import { JobPost } from './job-post.dto';
export interface JobApplicationReorderRequest {
    position: 'top' | 'bottom' | number;
    statusId: string;
}
export interface JobApplicationReorderedResponse {
    id: string;
    position: number;
    statusId: string;
}
export interface JobApplicationUpdatedResponse {
    id: string;
    position: number;
    archive: boolean;
    statusId: string;
    jobPostId: string;
    userId: string;
}
export interface JobApplicationCreateRequest {
    statusId: string;
    jobPostId: string;
}
export interface JobApplication {
    id: string;
    position: number;
    archive: boolean;
    status: Status;
    jobPost: JobPost;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    };
}
