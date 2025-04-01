import { NotionAPI } from 'notion-client';
import { authToken, user } from '../lib/config';

export const notion = new NotionAPI({
	authToken: authToken,
	activeUser: user,
});