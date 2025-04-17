"use server";
import { AddExamType } from "@/Library/pages/AddQuestion/AddQuestion";
import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

export const addQuestionAction = async (formValues: AddExamType) => {
	// try {
	// 	const res = await PostData("/question/add/answers", cookies().getAll(), formValues);
	//
	// 	//TODO: Add tag
	//
	// 	// const res = await axios.request(option);
	//
	// 	return { status: res.status };
	// } catch (error) {
	// 	//@ts-ignore
	// 	return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	// }
	try {
		const questionEn = formValues.questionEn.trim();
		const questionAr = formValues.questionAr.trim();
		const type = formValues.type.trim();
		const correctAnswersCount = formValues.correctAnswersCount;
		const answers = formValues.answers;
		const isDeleted = false;

		const payload = {
			questionEn,
			questionAr,
			type,
			correctAnswersCount,
			answers,
			isDeleted,
		};

		const { error, status, message } = await PostData(`/question/add/answers`, payload, "POST");
		// const res = await PostData(`/question/add/answers`, payload, "POST");
		// console.log(res.fullError?.response.data.errors);
		if (error) {
			return {
				res: status,
				failed: true,
				message: message ?? "Add Question failed",
			};
		}

		return { res: status, failed: false };
	} catch (error) {
		return {
			res: HttpStatus.INTERNAL_SERVER_ERROR,
			failed: true,
			message: "An unexpected error occurred",
		};
	}
};
