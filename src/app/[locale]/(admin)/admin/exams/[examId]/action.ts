"use server";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const updateExamForm1Action = async (
	changedValuesForm1: {
		nameEn: string;
		nameAr: string;
		descriptionEn: string;
		descriptionAr: string;
		slug: string;
		isDeleted: boolean;
	},
	id: string,
) => {
	try {
		const res = await PostData(`/exam/update/${id}`, changedValuesForm1, "PUT");
		return { status: res.data };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};

export const updateExamForm2Action = async (
	changedValuesForm2: {
		priceUSD: number;
		priceEGP: number;
		discountedPriceUSD: number;
		discountedPriceEGP: number;
		period: number;
	},
	id: string,
) => {
	try {
		const res = await PostData(
			`/examsPricing/update/${id}`,
			{ ...changedValuesForm2, exam: id },
			"PUT",
		);
		return { status: res.data };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
