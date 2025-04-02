import React from 'react';

// import type { ExtendedRecordMap } from 'notion-types';
// import notion from '../lib/notion';
import LecturesScreen from '../lib/modules/lectures/LecturesScreen';

// export const getStaticProps = async () => {
// 	// const lectures = await notion.getPage(process.env.ABOUT_PAGE);

// 	// return {
// 	// 	props: {
// 	// 		recordMap,
// 	// 	},
// 	// 	revalidate: 10,
// 	// };
// 	return {
// 		props: {}
// 	}
// };

const page = () => {
	return <LecturesScreen />
}

// const page = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
// 	return 
// }

export default page;