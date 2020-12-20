import { Status } from '../dto/status.dto';
export declare class StatusService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<Status[]>;
}
