import { HttpClient } from "./httpClient";
import { NotionService } from "./NotionService";
import { NOTION_API_BASE_URL } from './../constants/Notion';

const NotionClient = new HttpClient('/notion')
export const notionService = new NotionService(NotionClient)