import type { ExtendedRecordMap } from "notion-types";


export type lecture = {
	id: string;
	content: ExtendedRecordMap;
}

export type lecturesProps = Array<lecture>;

