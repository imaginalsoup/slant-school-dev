import React from "react";
import notion from "../lib/notion";
import HomeScreen from "../lib/modules/home/HomeScreen";
import type { ExtendedRecordMap } from "notion-types";
import type { lecturesProps } from "../lib/types/lecture-props";


type Props = {
	banner: ExtendedRecordMap;
	about: ExtendedRecordMap;
	proponent: ExtendedRecordMap;
	lectures: lecturesProps;
}

export const getStaticProps = async () => {
	const banner = await notion.getPage(process.env.ROOT_PAGE_ID);
	const about = await notion.getPage(process.env.ABOUT_PAGE);
	const proponent = await notion.getPage(process.env.PROPONENT);


	const lecture1 = await notion.getPage(process.env.LECTURE1);
	const lecture2 = await notion.getPage(process.env.LECTURE2);
	const lecture3 = await notion.getPage(process.env.LECTURE3);

	return {
		props: {
			about: about,
			banner: banner,
			lectures: [
				{ id: "sociology", content: lecture1, },
				{ id: "development", content: lecture2 },
				{ id: "ecocriticism", content: lecture3 },
			],
			proponent: proponent,
		},
		revalidate: 10,
	};
};

export default function Page({ about, banner, lectures, proponent }: Props) {
	return (
		<>
			<HomeScreen banner={banner} about={about} lectures={lectures} proponent={proponent} />
		</>
	);
}
