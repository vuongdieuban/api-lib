import { JobApplicationStatus } from './job-application-status.dto';
import { JobPost } from './job-post.dto';

export interface JobApplicationReorderRequest {
  position?: number;
  statusId: string;
}

export interface ApplicationUpdatedResponse {
  id: string;
  position: number;
  archived: boolean;
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
  archived: boolean;
  status: JobApplicationStatus;
  jobPost: JobPost;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}
