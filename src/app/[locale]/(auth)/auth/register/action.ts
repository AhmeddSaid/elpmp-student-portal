"use server";

import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

interface RegisterValues {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	repeatPassword: string;
}

interface RegisterResponse {
	res: number | null;
	failed: boolean;
	message?: string;
}

export const registerAction = async (values: RegisterValues): Promise<RegisterResponse> => {
	try {
		const email = values.email.trim();
		const password = values.password;
		const repeatPassword = values.repeatPassword;
		const firstName = values.firstName.trim();
		const lastName = values.lastName.trim();

		if (!email || !password || !firstName || !lastName || !repeatPassword) {
			return {
				res: HttpStatus.BAD_REQUEST,
				failed: true,
				message: "All fields are required",
			};
		}

		const payload = {
			email,
			password,
			repeatPassword,
			firstName,
			lastName,
		};

		const response = await PostData("/auth/register", payload, "POST");
		if (response.error) {
			return {
				res: response.status,
				failed: true,
				message: response.message || "Registration failed",
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
