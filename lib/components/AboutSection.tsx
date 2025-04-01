import { Box } from '@chakra-ui/react';
import type { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'

type Props = {
	about: ExtendedRecordMap;
}

const AboutSection = ({ about }: Props) => {
	return (
		<Box>
			<NotionRenderer recordMap={about} />
		</Box>
	)
}

export default AboutSection