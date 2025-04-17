import * as yup from "yup";

const settingsAddressValidation = (locale: "en" | "ar") => {
	return yup
		.object()
		.shape({
			address1: yup
				.string()
				.required(locale === "en" ? "Address 1 is required" : "برجاء ادخال العنوان")
				.min(3, "Minimum 3 characters"),
			address2: yup.string().notRequired().min(3, "Minimum 3 characters"),

			city: yup.string().required(locale === "en" ? "City is required" : "برجاء ادخال المدينة"),
			country: yup
				.string()
				.required(locale === "en" ? "Country is required" : "برجاء ادخال الدولة"),
			zipCode: yup
				.string()
				.required(locale === "en" ? "Zip code is required" : "برجاء ادخال الرمز البريدي")
				.min(4, "Minimum 4,5 characters")
				.max(7, "maximum 7 characters"),
			companyName: yup.string().notRequired().min(3, "Minimum 3 characters"),
			phoneExt: yup
				.string()
				.required(locale === "en" ? "Phone ext is required" : "برجاء ادخال صلاحية الهاتف"),
			phoneNumber: yup
				.string()
				.required(locale === "en" ? "Phone number is required" : "برجاء ادخال رقم الهاتف")
				.min(3, "Minimum 3 characters"),
			state: yup.string().notRequired().min(3, "Minimum 3 characters"),
		})
		.noUnknown(true, { noExtensions: true, message: "Unknown field" })
		.strict(true);
};

export default settingsAddressValidation;
