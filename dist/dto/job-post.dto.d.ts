import { Platform } from './platform.dto';
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
export interface JobPost extends BaseJobPost {
    id: string;
    platform: Platform;
}
export {};
