"use server";

import { revalidatePath } from "next/cache";
import { PostData } from "@/Utils/AxiosFetch";

export const ExamReviewAction = async (updateValues: {
	comment: string;
	rating: number;
	subExam: string;
	title: string;
}) => {
	try {
		const res = await PostData("/subExamReview/create", updateValues);
		revalidatePath("/exam/[examName]/[subExamName]");
		// console.log(res.data, "res");
		return { status: res.status };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
