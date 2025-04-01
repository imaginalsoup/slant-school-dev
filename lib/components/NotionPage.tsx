import { Head } from "next/document";
import type { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";

export function NotionPage({
	recordMap,
	rootPageId,
}: {
	recordMap: ExtendedRecordMap;
	rootPageId?: string;
}) {
	if (!recordMap) {
		return null;
	}

	const title = getPageTitle(recordMap);

	return (
		<>
			<Head>
				<meta
					name="description"
					content=""
				/>
				<title>{title}</title>
			</Head>
			<NotionRenderer
				recordMap={recordMap}
				fullPage={true}
				darkMode={false}
				rootPageId={rootPageId}
				disableHeader={true}
			/>
		</>
	);
}
