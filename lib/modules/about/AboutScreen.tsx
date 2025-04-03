import React from 'react';
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { Container, HStack } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';

export default function AboutScreen({ recordMap }: { recordMap: ExtendedRecordMap }) {
	return <Container>
		<NavBar />
		<HStack width='80%' paddingTop='180px' margin='auto' className='about-page' textAlign='center'>
			<NotionRenderer
				disableHeader={true}
				recordMap={recordMap}
				fullPage
			/>
		</HStack>
	</Container>
}
