import React from 'react';

import type { ExtendedRecordMap } from 'notion-types';

// import { NotionPage } from '../lib/components/NotionPage';
// import { rootNotionPageId } from '../lib/config';
import { notion } from '../lib/notion';
import HomeScreen from '../lib/modules/home/HomeScreen';

export const getStaticProps = async () => {
	// const pageId = rootNotionPageId;
	const recordMap = await notion.getPage(process.env.ROOT_PAGE_ID);

	return {
		props: {
			recordMap,
		},
		revalidate: 10,
	};
};

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
	// return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
	return <HomeScreen recordMap={recordMap} />
}
