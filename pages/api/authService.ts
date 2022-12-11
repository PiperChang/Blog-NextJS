import { AxiosResponse } from "axios";
import { HttpClient } from "../../api/httpClient";

type AuthData = {
  email: string;
  password: string;
};

interface IAuthService {
  signup({ email, password }: AuthData): Promise<AxiosResponse<any, any>>;
  signin({ email, password }: AuthData): Promise<AxiosResponse<any, any>>;
}

export class AuthService implements IAuthService {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async signin({ email, password }: AuthData) {
    const res = await this.httpClient.request({
      method: "POST",
      url: "/signin",
      data: { email, password },
    });
    return res;
  }
  async signup({ email, password }: AuthData) {
    const res = await this.httpClient.request({
      method: "POST",
      url: "/signup",
      data: { email, password },
    });
    return res;
  }
}
