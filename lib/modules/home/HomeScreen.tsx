import React from 'react'
import type { ExtendedRecordMap } from 'notion-types';
import Divider from '../../components/Divider';
import { Box, Container, Spacer } from '@chakra-ui/react';
import AboutSection from '../../components/AboutSection';
import HeroBanner from '../../components/HeroBanner';
import AboutProponent from '../../components/AboutProponent';
import LectureList from '../../components/LectureList';

type Props = {
	banner: ExtendedRecordMap;
	about: ExtendedRecordMap;
	proponent: ExtendedRecordMap;
	lectureList: ExtendedRecordMap;
}

const HomeScreen = ({ banner, about, proponent, lectureList }: Props) => {
	return (
		<Container>
			<HeroBanner banner={banner} />
			<Divider />
			<Container width='80%' margin='auto' paddingBottom='12px'>
				<AboutSection about={about} />
				<hr />
				<LectureList lectureList={lectureList} />
				<Spacer />
			</Container>
			<Box background="var(--black)" color='white' paddingTop='84px' paddingBottom='90px' className='home-about'>
				<AboutProponent proponent={proponent} />
			</Box>
		</Container >
	);
}

export default HomeScreen