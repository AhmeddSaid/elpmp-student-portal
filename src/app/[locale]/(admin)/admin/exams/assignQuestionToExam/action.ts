"use server";
import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

export const addQuestionToExam = async (formValues: { questionId: string; examId: string }) => {
	// 	try {
	// 		const res = await PostData("/exam/add/questions", cookies().getAll(), formValues);
	//
	// 		return { status: res.status };
	// 	} catch (error) {
	// 		//@ts-ignore
	// 		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	// 	}
	// };

	try {
		const exam = formValues.examId;
		const question = formValues.questionId;

		const payload = {
			question,
			exam,
		};
		const { error, status, message } = await PostData(`/exam/add/questions`, payload, "POST");
		if (error) {
			return {
				res: status,
				failed: true,
				message: message || "Add Exam to question failed",
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
