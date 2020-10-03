import { User } from './user.dto';
export interface LoginRequest {
    accessToken: string;
}
export interface LoginResponse {
    accessToken: string;
    user: User;
}
export interface RenewTokenResponse {
    accessToken: string;
    user: User;
}
