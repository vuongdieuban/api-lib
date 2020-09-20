import { ApiConfig } from '../config';
import { User } from '../models/user.model';
import { HttpService } from './http.service';

export class UserService {
  private readonly BASE_URL: string;
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async findAll(): Promise<User[]> {
    const url = `${this.BASE_URL}/user`;
    const { data } = await this.httpService.get<User[]>(url);
    return data;
  }
}
