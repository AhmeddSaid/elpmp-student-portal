"use server";
import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

interface AddTagToQuestionValues {
	questionTagId: string;
	questionsId: string;
}

interface AddTagToQuestionResponse {
	res: number | null;
	failed: boolean;
	message?: string;
}

export const addTagsToQuestions = async (
	formValues: AddTagToQuestionValues,
): Promise<AddTagToQuestionResponse> => {
	// try {
	// 	const res = await PostData("/question/add/tags" formValues);
	//
	// 	return { status: res.status };
	// } catch (error) {
	// 	//@ts-ignore
	// 	return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	// }

	try {
		const questionsId = formValues.questionsId;
		const questionTagId = formValues.questionTagId;

		const payload = {
			questionsId,
			questionTagId,
		};

		const { error, status, message } = await PostData(`/question/add/tags`, payload, "POST");

		if (error) {
			return {
				res: status,
				failed: true,
				message: message || "Add Tag to question failed",
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
