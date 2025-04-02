import React from 'react';

import LecturesScreen from '../lib/modules/lectures/LecturesScreen';
import notion from '../lib/notion';
import type { lecture, lecturesProps } from '../lib/types/lecture-props';

type Props = {
	lectures: lecturesProps;
}

export const getStaticProps = async () => {
	const lecture1 = await notion.getPage(process.env.LECTURE1);
	const lecture2 = await notion.getPage(process.env.LECTURE2);
	const lecture3 = await notion.getPage(process.env.LECTURE3);

	return {
		props: {
			lectures: [
				{ id: "sociology", content: lecture1, },
				{ id: "development", content: lecture2 },
				{ id: "ecocriticism", content: lecture3 },
			],
		},
		revalidate: 10,
	};
};

const page = ({ lectures }: Props) => {
	return <LecturesScreen lectures={lectures} />
}


export default page;