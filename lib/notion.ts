import { NotionAPI } from 'notion-client';
import { authToken, user } from '../lib/config';

const notion = new NotionAPI({
	authToken: authToken,
	activeUser: user,
});

export default notion;
