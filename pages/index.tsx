import React from 'react';
import type { ExtendedRecordMap } from 'notion-types';
import notion from '../lib/notion';
import HomeScreen from '../lib/modules/home/HomeScreen';

export const getStaticProps = async () => {
	const recordMap = await notion.getPage(process.env.ROOT_PAGE_ID);

	return {
		props: {
			recordMap,
		},
		revalidate: 10,
	};
};

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
	return <>
		<HomeScreen recordMap={recordMap} />
	</>
}
