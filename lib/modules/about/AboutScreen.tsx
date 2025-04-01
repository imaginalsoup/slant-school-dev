import React from 'react';
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';


export default function AboutScreen({ recordMap }: { recordMap: ExtendedRecordMap }) {
	return <NotionRenderer
		disableHeader={false}
		recordMap={recordMap}
		fullPage
	/>
}
