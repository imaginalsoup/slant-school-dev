import React from 'react'
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { getPageImageUrls, defaultMapImageUrl } from 'notion-utils';

type Props = { recordMap: ExtendedRecordMap }

const HomeScreen = ({ recordMap }: Props) => {
	const bannerImage: string = getPageImageUrls(recordMap, {
		mapImageUrl: defaultMapImageUrl
	})[0];

	return (
		<div className='banner notion-page-cover-wrapper'>
			<img src={bannerImage} alt='banner' />
			<NotionRenderer
				recordMap={recordMap}
			/>
		</div >
	);
}


export default HomeScreen