import React from 'react';
import notion from '../lib/notion';
import LecturesScreen from '../lib/modules/lectures/LecturesScreen';
import type { lecturesProps } from '../lib/types/lecture-props';

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
}


const lectures = ({ lectures }: Props) => {
	return <div className="lectures-page">
		<LecturesScreen lectures={lectures} />
	</div>
}

export default lectures;