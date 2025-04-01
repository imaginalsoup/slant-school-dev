import React from 'react'
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { getPageImageUrls, defaultMapImageUrl, getPageTitle, getBlockTitle } from 'notion-utils';

type Props = { recordMap: ExtendedRecordMap }


const HomeScreen = ({ recordMap }: Props) => {
	const bannerImage: string = getPageImageUrls(recordMap, {
		mapImageUrl: defaultMapImageUrl
	})[0];

	const title = getPageTitle(recordMap);

	return (
		<div>
			<div className='banner notion-page-cover-wrapper'
				style={{
					backgroundImage: `linear-gradient(to bottom, #2E210BEF, rgba(245, 246, 252, 0.02),
				#2E210BE1), url(${bannerImage})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					// backgroundRepeat: 'no-repeat'
				}}
			>
				<div className='hero-text'>
					<h1>{title}</h1>
					<NotionRenderer
						disableHeader={true}
						recordMap={recordMap}
					/>
				</div>
			</div >
		</div>
	);
}


export default HomeScreen