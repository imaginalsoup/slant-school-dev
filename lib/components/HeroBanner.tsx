import { Box, Container, Heading, VStack, } from '@chakra-ui/react';
import type { ExtendedRecordMap } from 'notion-types'
import { defaultMapImageUrl, getPageImageUrls, getPageTitle } from 'notion-utils';
import React from 'react'
import { NotionRenderer } from 'react-notion-x'

type Props = {
	banner: ExtendedRecordMap;
}

const HeroBanner = ({ banner }: Props) => {
	const bannerImage: string = getPageImageUrls(banner, {
		mapImageUrl: defaultMapImageUrl
	})[0];

	const title = getPageTitle(banner);

	return (
		<Container
			className='banner'
			padding='32px'
			height='60vh'
			style={{
				backgroundImage: `url(${bannerImage})`,
				// backgroundImage: `linear-gradient(to bottom, #2E210BCD,
				// #2E210BE1), url(${bannerImage})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
			alignContent='center'
		>
			<VStack
				color="var(--white)"
				width={{ base: '100%', md: '50%' }}
				margin='auto'
				textAlign='center'
				// border='2px solid green'
				height='auto'
			>
				<Heading size='7xl' as='h1'>{title}</Heading>
				<Box fontSize='xl'
				>
					<NotionRenderer
						disableHeader={false}
						recordMap={banner}
					/>
				</Box>
			</VStack>
		</Container >
	)
}

export default HeroBanner