"use server";

import { GetData } from "@/Utils/AxiosFetch";

export const StartExamAction = async (
	subexam: string,
	mode: number,
): Promise<{ url: string; status: number }> => {
	try {
		// @ts-ignore
		const res = await GetData(`/exam-session/create/${subexam}/${mode}`);

		// @ts-ignore
		return { status: res.status, url: res.data.sessionKey };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || 500 };
	}
};
