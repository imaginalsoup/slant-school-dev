import React from 'react'
import type { ExtendedRecordMap } from 'notion-types';
import Divider from '../../components/Divider';
import { Box, Container } from '@chakra-ui/react';
import AboutSection from '../../components/AboutSection';
import HeroBanner from '../../components/HeroBanner';
import AboutProponent from '../../components/AboutProponent';
import NavBar from '../../components/NavBar';
import LectureList from '../../components/LectureList';

type lectureProps = {
	id: string;
	content: ExtendedRecordMap;
}

type Props = {
	banner: ExtendedRecordMap;
	about: ExtendedRecordMap;
	proponent: ExtendedRecordMap;
	lectureList: ExtendedRecordMap;
	lectures: Array<lectureProps>;
}

const HomeScreen = ({ banner, about, proponent, lectureList }: Props) => {
	return (
		<Container>
			<NavBar />
			<HeroBanner banner={banner} />
			<Divider />
			<Container width='80%' margin='auto'>
				<AboutSection about={about} />
				<hr />
				<LectureList lectureList={lectureList} />
			</Container>
			<Box background="var(--black)" color='white' paddingTop='64px' paddingBottom='90px' >
				<AboutProponent proponent={proponent} />
			</Box>
		</Container >
	);
}

export default HomeScreen