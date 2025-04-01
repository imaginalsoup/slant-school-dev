// import React from 'react';

// import type { ExtendedRecordMap } from 'notion-types';

// import { NotionPage } from '../lib/components/NotionPage';
// import { rootNotionPageId } from '../lib/config';
// import notion from '../lib/notion';

// type nextContextTypes = {
// 	params: { pageId: string };
// 	locales: undefined;
// 	locale: undefined;
// 	defaultLocale: undefined;
// 	revalidateReason: string;
// };

// export const getStaticProps = async (context: nextContextTypes) => {
// 	const pageId = (context.params.pageId as string) || rootNotionPageId;

// 	const recordMap = await notion.getPage(pageId || '');

// 	return {
// 		props: {
// 			recordMap,
// 		},
// 		revalidate: 10,
// 	};
// };

// export async function getStaticPaths() {
// 	return {
// 		paths: [],
// 		fallback: true,
// 	};
// }

// export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
// 	return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
// }
