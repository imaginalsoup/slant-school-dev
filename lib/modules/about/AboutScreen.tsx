import React from 'react';
import type { ExtendedRecordMap } from 'notion-types';
// import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';


export default function AboutScreen({ recordMap }: { recordMap: ExtendedRecordMap }) {
	// const title = getPageTitle(recordMap);
	return <NotionRenderer
		disableHeader={true}
		recordMap={recordMap}
	/>
}
