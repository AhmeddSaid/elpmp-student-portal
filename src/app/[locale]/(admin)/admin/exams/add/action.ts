"use server";
import { ExamValuesType } from "@/Library/pages/AddExams/AddExams";
import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

// interface AddExamValues {
// 	nameEn: string;
// 	nameAr: string;
// 	descriptionEn: string;
// 	descriptionAr: string;
// 	slug: string;
// 	image: string;
// 	priceUSD: string;
// 	priceEGP: string;
// 	discountedPriceUSD: string;
// 	discountedPriceEGP: string;
// 	period: string;
// 	isDeleted: boolean;
// }

interface AddExamResponse {
	res: number | null;
	failed: boolean;
	message?: string;
}

export const addExamAction = async (
	changedValues: Partial<ExamValuesType>,
): Promise<AddExamResponse> => {
	try {
		const nameEn = changedValues?.nameEn?.trim();
		const nameAr = changedValues?.nameAr?.trim();
		const descriptionEn = changedValues?.descriptionEn?.trim();
		const descriptionAr = changedValues?.descriptionAr?.trim();
		const slug = changedValues?.slug?.trim();
		const image = changedValues?.image?.trim();
		const priceUSD = changedValues.priceUSD;
		const priceEGP = changedValues.priceEGP;
		const discountedPriceUSD = changedValues.discountedPriceUSD;
		const discountedPriceEGP = changedValues.discountedPriceEGP;
		const period = changedValues.period;
		const isDeleted = false;

		const payload = {
			nameEn,
			nameAr,
			descriptionEn,
			descriptionAr,
			slug,
			image,
			priceUSD,
			priceEGP,
			discountedPriceUSD,
			discountedPriceEGP,
			period,
			isDeleted,
		};
		const { error, status, message } = await PostData(`/exam`, payload, "POST");
		if (error) {
			return {
				res: status,
				failed: true,
				message: message || "Add Exam failed",
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
