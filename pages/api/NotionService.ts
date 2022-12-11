import {AxiosResponse} from 'axios'
import { HttpClient } from '../../api/httpClient'
type getDatabase = {
}

interface InotionService {
}

export class NotionService implements InotionService {
  private httpClient :HttpClient;

  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * post 관련 api
   * 1. GET 
   * 2. POST COMMENT
   */
}