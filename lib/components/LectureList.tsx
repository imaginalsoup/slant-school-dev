import { Box } from '@chakra-ui/react';
import type { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x';
import SectionLayout from './SectionLayout';

type Props = {
	lectureList: ExtendedRecordMap;
}

const LectureList = ({ lectureList }: Props) => {
	return (
		<SectionLayout>
			<Box className='lecture-summary'>
				<NotionRenderer
					fullPage={true}
					// darkMode={false}
					// disableHeader={false}
					recordMap={lectureList}
					disableHeader={true}
				/>
			</Box>
		</SectionLayout>
	)
}

export default LectureList