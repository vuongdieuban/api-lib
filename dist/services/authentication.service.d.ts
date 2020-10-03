import { LoginRequest, LoginResponse, RenewTokenResponse } from 'src/dto/authentication.dto';
export declare class AuthenticationService {
    private readonly BASE_URL;
    private readonly httpService;
    constructor();
    login(payload: LoginRequest): Promise<LoginResponse>;
    logout(): Promise<string>;
    renewToken(): Promise<RenewTokenResponse>;
}
