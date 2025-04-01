import React from 'react'
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import Divider from '../../components/Divider';
import { Box, Container, Heading, Spacer } from '@chakra-ui/react';
import AboutSection from '../../components/AboutSection';
import HeroBanner from '../../components/HeroBanner';
import AboutProponent from '../../components/AboutProponent';
import NavBar from '../../components/NavBar';

type lectureProps = {
	id: string;
	content: ExtendedRecordMap;
}

type Props = {
	banner: ExtendedRecordMap;
	about: ExtendedRecordMap;
	proponent: ExtendedRecordMap;
	lectures: Array<lectureProps>;
}

const HomeScreen = ({ banner, about, lectures, proponent }: Props) => {
	return (
		<Container>
			<NavBar />
			<HeroBanner banner={banner} />
			<Divider />
			<Container width='80%' margin='auto' paddingX='80px'>
				<Box width='100%' margin='auto' paddingTop='64px'>
					<AboutSection about={about} />
				</Box>
				<Spacer />
				<hr />
				<Box>
					<Heading>Lectures</Heading>
					{lectures.map((item, index) =>
						<Box key={index.toString()} paddingBottom='56px'>
							<Heading color='#cc5c00'>
								<i>
									{(index + 1).toString()} {item.id} aslant
								</i>
							</Heading>
							<Box paddingLeft='24px'>
								<NotionRenderer recordMap={item.content} />
							</Box>
						</Box>
					)}
				</Box >
			</Container>
			<Box background='#181818' color='white' paddingTop='64px' paddingBottom='90px' >
				<Box width='80%' margin='auto'>
					<AboutProponent proponent={proponent} />
				</Box>
			</Box>
		</Container >
	);
}

export default HomeScreen