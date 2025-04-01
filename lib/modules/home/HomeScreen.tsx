import React from 'react'
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { getPageImageUrls, defaultMapImageUrl, getPageTitle } from 'notion-utils';
import Divider from '../../components/Divider';
import { Container, Heading } from '@chakra-ui/react';

type Props = { recordMap: ExtendedRecordMap }


const HomeScreen = ({ recordMap }: Props) => {
	const bannerImage: string = getPageImageUrls(recordMap, {
		mapImageUrl: defaultMapImageUrl
	})[0];

	const title = getPageTitle(recordMap);

	return (
		<Container>
			<Container className='banner notion-page-cover-wrapper'
				style={{
					backgroundImage: `linear-gradient(to bottom, #2E210BFA, rgba(245, 246, 252, 0.02),
				#2E210BE1), url(${bannerImage})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					// backgroundRepeat: 'no-repeat'
				}}
			>
				<Container className='hero-text'>
					<Heading>{title}</Heading>
					<NotionRenderer
						disableHeader={true}
						recordMap={recordMap}
					/>
				</Container>
			</Container >
			<Divider />
		</Container>
	);
}

export default HomeScreen