import { User } from '../models/user.model';
export declare class UserService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<User[]>;
}
