"use server";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const userProfileAction = async (updatedValues: {
	// firstName: string;
	// lastName: string;
	// username: string;
	phone: string | null;
	// preferredLanguage: string;
	// preferredTheme: string;
	// preferredCurrency: string;
	nationality: string | null;
	phoneExt: string | null;
	// avatar: string;
}) => {
	try {
		const res = await PostData("/userInfo", updatedValues, "PUT");
		return { status: res.status };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
