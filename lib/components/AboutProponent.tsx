import { Box } from '@chakra-ui/react'
import type { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import SectionLayout from './SectionLayout'

type Props = {
	proponent: ExtendedRecordMap
}

const AboutProponent = ({ proponent }: Props) => {
	return (
		<SectionLayout>
			<Box width='80%' margin='auto'>
				<NotionRenderer recordMap={proponent} />
			</Box>
		</SectionLayout>)
}

export default AboutProponent