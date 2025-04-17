"use server";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const verifyPasswordAction = async (updateValues: {
	password: string;
	repeatPassword: string;
	token: string;
	verifyToken: string;
}) => {
	try {
		const res = await PostData("/auth/reset-password", updateValues);
		return { status: res.status };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
