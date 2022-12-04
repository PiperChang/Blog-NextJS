import {AxiosResponse} from 'axios'
import { HttpClient } from './httpClient'
type getDatabase = {
}

interface InotionService {
}

export class NotionService implements InotionService {
  private httpClient :HttpClient;

  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }  
}