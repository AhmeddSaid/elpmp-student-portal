"use server";
import { revalidatePath } from "next/cache";
import { PostData } from "@/Utils/AxiosFetch";
import httpStatus from "@/Utils/httpStatus";

type AddressFormValues = {
	address1: string;
	address2: string | null;
	city: string;
	country: string;
	state: string | null;
	zipCode: string;
	companyName: string | null;
	phoneNumber: string;
	phoneExt: string;
};

export const updateBillingAddressAction = async (formValues: AddressFormValues) => {
	try {
		const normalizeValue = (value: string | undefined | null) => {
			return value?.trim() || null;
		};

		const addressPayload: AddressFormValues = {
			address1: formValues.address1.trim(),
			address2: normalizeValue(formValues.address2),
			city: formValues.city.trim(),
			country: formValues.country.trim(),
			state: normalizeValue(formValues.state),
			zipCode: formValues.zipCode.trim(),
			companyName: normalizeValue(formValues.companyName),
			phoneNumber: formValues.phoneNumber.trim(),
			phoneExt: formValues.phoneExt.trim(),
		};

		const res = await PostData("/billingAddress", addressPayload, "PUT");
		revalidatePath("/settings/address");
		return { status: res.status };
	} catch (error: unknown) {
		// @ts-ignore
		return { status: error.response?.status || httpStatus.INTERNAL_SERVER_ERROR };
	}
};
