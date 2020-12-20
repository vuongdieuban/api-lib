import { Platform } from '../dto/platform.dto';
export declare class PlatformService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<Platform[]>;
}
