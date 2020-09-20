import { Platform } from '../models/platform.model';
export declare class PlatformService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<Platform[]>;
}
