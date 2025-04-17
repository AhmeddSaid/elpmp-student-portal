"use server";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const updateTagAction = async (
	formValues: {
		nameEn: string;
		nameAr: string;
		describtionEn: string;
		describtionAr: string;
		isDeleted: boolean;
	},
	id: string,
) => {
	try {
		const res = await PostData(`/tag/update/${id}`, formValues, "PUT");
		return { status: res.data };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
