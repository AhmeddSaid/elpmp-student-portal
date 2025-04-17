"use server";

import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

interface TagValues {
	nameEn: string;
	nameAr: string;
	descriptionEn: string;
	descriptionAr: string;
	isDeleted: boolean;
}

interface TagResponse {
	res: number | null;
	failed: boolean;
	message?: string;
}

export const addTagAction = async (formValues: TagValues): Promise<TagResponse> => {
	try {
		const nameEn = formValues.nameEn.trim();
		const nameAr = formValues.nameAr.trim();
		const descriptionEn = formValues.descriptionEn.trim();
		const descriptionAr = formValues.descriptionAr.trim();
		const payload = {
			...formValues,
			nameEn,
			nameAr,
			descriptionEn,
			descriptionAr,
		};

		const response = await PostData(`/tag/create`, payload, "POST");
		if (response.error) {
			return {
				res: response.status,
				failed: true,
				message: response.message ?? "Add tag failed",
			};
		}

		return { res: response.status, failed: false };
	} catch (error) {
		return {
			res: HttpStatus.INTERNAL_SERVER_ERROR,
			failed: true,
			message: "An unexpected error occurred",
		};
	}
};
