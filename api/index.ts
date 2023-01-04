import { HttpClient } from "./httpClient";
import { NotionService } from "./NotionService";
import { NOTION_API_BASE_URL } from './../constants/Notion';
import { APIRoutesService } from './APIRoutesService';

const NotionClient = new HttpClient('/notion')
const TipClient = new HttpClient('/api/tip')

export const notionService = new NotionService(NotionClient)
export const TipService = new APIRoutesService(TipClient)