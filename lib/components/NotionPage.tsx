import React from 'react';

import Head from 'next/head';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';
import type { ExtendedRecordMap } from 'notion-types';

export function NotionPage({
	recordMap,
	// rootPageId,
}: {
	recordMap: ExtendedRecordMap;
	// rootPageId?: string;
}) {
	if (!recordMap) {
		return null;
	}

	const title = getPageTitle(recordMap);

	return (
		<>
			<Head>
				<meta
					name="description"
					content=""
				/>
				<title>{title}</title>
			</Head>
			<NotionRenderer
				recordMap={recordMap}
			/>

		</>
	);
}
