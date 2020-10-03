import { User } from '../dto/user.dto';
export declare class UserService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    findAll(): Promise<User[]>;
}
