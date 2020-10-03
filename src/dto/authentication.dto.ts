import { User } from './user.dto';

export interface LoginRequest {
  accessToken: string; // Chrome OAuth Access Token
}

export interface LoginResponse {
  accessToken: string; // Jobs Tracker Access Token to be sent with Authorization Bearer to access protected endpoint
  user: User;
}

export interface RenewTokenResponse {
  accessToken: string;
  user: User;
}
