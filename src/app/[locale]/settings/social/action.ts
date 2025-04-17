"use server";
import { PostData } from "@/Utils/AxiosFetch";
import HttpStatus from "@/Utils/httpStatus";

interface SocialValues {
	facebook: string;
	twitterX: string;
	linkedin: string;
	instagram: string;
	snapchat: string;
}

interface SocialResponse {
	res: number | null;
	failed: boolean;
	message?: string;
}

const API_ENDPOINT = "/social";
const DEFAULT_ERROR_MESSAGE = "Updating social media failed";

const sanitizeInput = (value: string | null | undefined): string | null => value?.trim() || null;

export const socialAction = async ({
	facebook,
	twitterX,
	linkedin,
	instagram,
	snapchat,
}: SocialValues): Promise<SocialResponse> => {
	try {
		const payload = {
			facebook: sanitizeInput(facebook),
			twitterX: sanitizeInput(twitterX),
			linkedin: sanitizeInput(linkedin),
			instagram: sanitizeInput(instagram),
			snapchat: sanitizeInput(snapchat),
		};

		const { error, status, message } = await PostData(API_ENDPOINT, payload, "PUT");
		if (error) {
			return {
				res: status,
				failed: true,
				message: message || DEFAULT_ERROR_MESSAGE,
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
