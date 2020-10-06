import { ApiConfig } from '../config';
import { User } from '../dto/user.dto';
import { HttpService } from './http.service';

export class UserService {
  private readonly BASE_URL: string;
  private readonly httpService = HttpService;

  constructor() {
    this.BASE_URL = ApiConfig.getBaseURL();
  }

  async findAll(): Promise<User[]> {
    const url = `${this.BASE_URL}/user`;
    const { data } = await this.httpService.get<User[]>(url);
    return data;
  }
}
