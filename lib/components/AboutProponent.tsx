import { Box } from '@chakra-ui/react'
import type { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'

type Props = {
	proponent: ExtendedRecordMap
}

const AboutProponent = ({ proponent }: Props) => {
	return (
		<Box>
			<NotionRenderer recordMap={proponent} />
		</Box>)
}

export default AboutProponent