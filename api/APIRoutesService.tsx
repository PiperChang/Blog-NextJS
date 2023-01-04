import { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios';
import { HttpClient } from './httpClient';
interface IAPIRoutesService {
}

export class APIRoutesService implements IAPIRoutesService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  
  async getList() {
    const res = await this.httpClient.request({
      method: "GET", 
    })
    console.log(res);
    
    return res
  }



}