import React from 'react';

import type { ExtendedRecordMap } from 'notion-types';
import { notion } from '../lib/notion';
import AboutScreen from '../lib/modules/about/AboutScreen';

export const getStaticProps = async () => {
	const recordMap = await notion.getPage(process.env.ABOUT_PAGE);

	return {
		props: {
			recordMap,
		},
		revalidate: 10,
	};
};


const about = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
	return <div className="about">
		<AboutScreen recordMap={recordMap} />
	</div>
}

export default about