import React from "react";
import NavBar from "../lib/components/NavBar";
import notion from "../lib/notion";
import HomeScreen from "../lib/modules/home/HomeScreen";
import type { ExtendedRecordMap } from "notion-types";
import type { lecturesProps } from "../lib/types/lecture-props";

type Props = {
	banner: ExtendedRecordMap;
	about: ExtendedRecordMap;
	proponent: ExtendedRecordMap;
	lectures: lecturesProps;
	lectureList: ExtendedRecordMap;
}

export const getStaticProps = async () => {
	const banner = await notion.getPage(process.env.ROOT_PAGE_ID);
	const about = await notion.getPage(process.env.ABOUT_PAGE);
	const proponent = await notion.getPage(process.env.PROPONENT);

	const lectureList = await notion.getPage(process.env.LECTURES);

	return {
		props: {
			about: about,
			banner: banner,
			proponent: proponent,
			lectureList: lectureList,
		},
		revalidate: 10,
	};
};

export default function Page({ about, banner, proponent, lectureList, }: Props) {
	return (
		<>
			<NavBar />
			<HomeScreen banner={banner} about={about} proponent={proponent} lectureList={lectureList} />
		</>
	);
}


// export default function Page() {
// 	return (
// 		<>
// 			<NavBar />
// 			hii
// 		</>
// 	);
// }

