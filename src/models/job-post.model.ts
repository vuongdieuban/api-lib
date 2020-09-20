import { Platform } from './platform.model';

interface BaseJobPost {
  title: string;
  url: string;
  companyName: string;
  location: string;
  platformJobKey: string;
}

export interface JobPostCreateRequest extends BaseJobPost {
  platformId: string;
}

// Job Post that existed in db already
export interface JobPost extends BaseJobPost {
  id: string;
  platform: Platform;
}
