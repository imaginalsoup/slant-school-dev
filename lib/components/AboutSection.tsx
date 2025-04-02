import type { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import SectionLayout from './SectionLayout';
import { Box } from '@chakra-ui/react';

type Props = {
	about: ExtendedRecordMap;
}

const AboutSection = ({ about }: Props) => {
	return (
		<SectionLayout>
			<Box className='about-section'>
				<NotionRenderer recordMap={about} />
			</Box>
		</SectionLayout>
	)
}

export default AboutSection