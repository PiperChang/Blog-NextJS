import { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios';
import { HttpClient } from './httpClient';
interface InotionService {
}

export class NotionService implements InotionService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;

    this.httpClient.interceptRequest((config) => {
      config.headers.accept = 'application/json';
      config.headers['Notion-Version'] = process.env.NOTION_VERSION;
      config.headers['content-type'] = 'application/json';
      return config
    })
  }

  async getPostList() {
    const res = await this.httpClient.request({
      method: "GET",
      url: `/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE}`,
    }).then((res)=>{
      console.log("안 에러");
    }).catch((err)=>{
      console.log("에러");      
    })
    return res
  }
}