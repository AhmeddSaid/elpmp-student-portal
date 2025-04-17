"use server";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const forgotPasswordAction = async (values: { email: string }) => {
	try {
		const email = values.email;
		const payload = { email };
		const res = await PostData("/auth/forgot-password", payload);
		return res.status;
	} catch (error: unknown) {
		// @ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
