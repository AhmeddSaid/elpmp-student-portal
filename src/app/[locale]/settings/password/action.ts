"use server";
import { cookies } from "next/headers";
import { axiosInstance } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

export const changePasswordAction = async (formValues: {
	oldPassword: string;
	password: string;
	repeatPassword: string;
}) => {
	if (formValues.oldPassword === formValues.password) {
		return { status: httpStatus.CONFLICT };
	}
	const cookiesStore = cookies();
	const cook = cookiesStore.getAll();
	const cookiesHolder = cook?.map(cookie => `${cookie.name}=${cookie.value}`).join(";");

	try {
		const option = {
			url: "auth/change-password",
			method: "POST",
			data: formValues,
			withCredentials: true,
			headers: {
				Cookie: cookiesHolder,
			},
		};

		const res = await axiosInstance(option);

		return { status: res.status };
	} catch (error) {
		//@ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
