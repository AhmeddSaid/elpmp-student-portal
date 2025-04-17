"use server";
import { PromoFormValues } from "@/Library/pages/UpdatePromo/UpdatePromo";
import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

export const promoAction = async ({
	updatedFormValues,
}: {
	updatedFormValues: PromoFormValues;
}) => {
	// try {
	// 	const payload = {
	// 		...updatedFormValues,
	// 	};
	// 	const res = await PostData("/promo/create", payload, "POST");
	// 	return { status: res };
	// } catch (error) {
	// 	//@ts-ignore
	// 	return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	// }
	try {
		const code = updatedFormValues.code.trim();
		const usageLimit = updatedFormValues.usageLimit;
		const startDate = updatedFormValues.startDate;
		const endDate = updatedFormValues.endDate;
		const firstUse = updatedFormValues.firstUse;
		const discount = updatedFormValues.discount;
		const maxDiscount = updatedFormValues.maxDiscount;
		const isDeleted = false;

		const payload = {
			code,
			usageLimit,
			startDate,
			endDate,
			firstUse,
			discount,
			maxDiscount,
			isDeleted,
		};

		const { error, status, message } = await PostData(`/promo/create`, payload, "POST");
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
