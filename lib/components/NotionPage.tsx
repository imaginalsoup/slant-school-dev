// import React from 'react';

// import Head from 'next/head';
// import { defaultMapImageUrl, getPageImageUrls, getPageTitle } from 'notion-utils';
// import { NotionRenderer } from 'react-notion-x';
// import type { ExtendedRecordMap } from 'notion-types';

// export function NotionPage({
// 	recordMap,
// 	rootPageId,
// }: {
// 	recordMap: ExtendedRecordMap;
// 	rootPageId?: string;
// }) {
// 	if (!recordMap) {
// 		return null;
// 	}

// 	const title = getPageTitle(recordMap);
// 	// const image = getPageImageUrls(recordMap);

// 	// console.log(image);

// 	// console.log(title);
// 	console.log(recordMap, '\n\n');

// 	const bannerImage: string = getPageImageUrls(recordMap, {
// 		mapImageUrl: defaultMapImageUrl
// 	})[0];

// 	console.log(bannerImage);

// 	// const previewImagesMap = Object.fromEntries(
// 	// 	await pMap(urls, async (url) => [url, await getPreviewImage(url)], {
// 	// 		concurrency: 8
// 	// 	})
// 	// )

// 	// return previewImagesMap
// 	// }

// 	// const header = () => {
// 	// 	<div>
// 	// 		<Image>

// 	// 		</Image>
// 	// 	</div>
// 	// }

// 	return (
// 		<>
// 			<Head>
// 				<meta
// 					name="description"
// 					content=""
// 				/>
// 				<title>{title}</title>
// 			</Head>
// 			<NotionRenderer
// 				recordMap={recordMap}
// 			// components={{ Image: urls }}
// 			// darkMode={true}
// 			/>
// 			{/* <NotionRenderer image */}
// 			{/* <NotionRenderer
// 				// showTableOfContents={true}
// 				// components={}
// 				// forceCustomImages
// 				recordMap={recordMap}
// 				fullPage={true}
// 				darkMode={false}
// 				rootPageId={rootPageId}
// 				disableHeader={true}
// 			/> */}
// 		</>
// 	);
// }
