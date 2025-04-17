"use server";

import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

export const AddStudentToExamAction = async (formValues: { examId: string; userId: string }) => {
	// try {
	// 	const res = await PostData("/enroll/create");
	// 	return { status: res.status };
	// } catch (error) {
	// 	//@ts-ignore
	// 	return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	// }

	try {
		const examId = formValues.examId;
		const userId = formValues.userId;

		const payload = {
			userId,
			examId,
		};

		const { error, status, message } = await PostData(`/enroll/create`, payload, "POST");
		if (error) {
			return {
				res: status,
				failed: true,
				message: message || "Add student to exam failed",
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
