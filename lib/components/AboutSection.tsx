import type { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import SectionLayout from './SectionLayout';

type Props = {
	about: ExtendedRecordMap;
}

const AboutSection = ({ about }: Props) => {
	return (
		<SectionLayout>
			<NotionRenderer recordMap={about} />
		</SectionLayout>
	)
}

export default AboutSection