"use server";
import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

export const addSubExamAction = async ({
	formValues,
}: {
	formValues: {
		nameEn: string;
		nameAr: string;
		descriptionEn: string;
		descriptionAr: string;
		isDeleted: boolean;
		slug: string;
		subExamType: string;
		exam: string;
		tag: string;
		passingScore: number;
		durationPerQuestion: number;
	};
}) => {
	// try {
	// 	const res = await PostData("/subExam/add", cookies().getAll(), formValues);
	//
	// 	//@ts-ignore
	// 	return { status: res.error.response.data.errors };
	// } catch (error) {
	// 	//@ts-ignore
	// 	return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	// }

	try {
		const nameEn = formValues.nameEn;
		const nameAr = formValues.nameAr;
		const descriptionEn = formValues.descriptionEn;

		const descriptionAr = formValues.descriptionAr;
		const isDeleted = formValues.isDeleted;
		const slug = formValues.slug;
		const subExamType = formValues.subExamType;
		const exam = formValues.exam;
		const tag = formValues.tag;
		const passingScore = formValues.passingScore;
		const durationPerQuestion = formValues.durationPerQuestion;

		const payload = {
			nameEn,
			nameAr,
			descriptionEn,
			descriptionAr,
			isDeleted,
			slug,
			subExamType,
			exam,
			tag,
			passingScore,
			durationPerQuestion,
		};

		const { error, status, message } = await PostData(`/subExam/add`, payload, "POST");
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
