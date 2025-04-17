"use server";
import { GetData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const ExamHistoryAction = async (url: string, currentPage?: number) => {
	try {
		const fetchUrl = currentPage ? `${url}?page=${currentPage}` : url;
		const res = await GetData(fetchUrl);
		// @ts-ignore
		return { data: res.data.data.data, failed: false };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
