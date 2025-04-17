"use server";
import { PromoFormValues } from "@/Library/pages/UpdatePromo/UpdatePromo";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const updatePromoAction = async (updatedFormValues: PromoFormValues, id: string) => {
	try {
		const res = await PostData(`promo/update/${id}`, updatedFormValues, "PUT");
		return { status: res.data };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
