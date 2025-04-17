"use server";
import { revalidatePath } from "next/cache";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const addDiscussion = async (
	formValues: {
		comment: string;
	},
	SubExamId: string,
) => {
	try {
		const data = {
			comment: formValues.comment,
			subExam: SubExamId,
		};

		const res = await PostData(`/subExamDiscussion/create`, data);
		revalidatePath(`/exam/[examName]/[subExamName]`, "page");
		return { status: res.data };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
