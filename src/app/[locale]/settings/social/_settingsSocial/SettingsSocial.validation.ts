import * as yup from "yup";

const settingsSocialValidation = yup
	.object()
	.shape({
		facebook: yup
			.string()
			.notRequired()
			.matches(
				/^((https?:\/\/)?(www\.)?)?facebook\.com\/[a-zA-Z0-9.]+$/g,
				"Enter a valid facebook url",
			),
		twitterX: yup
			.string()
			.notRequired()
			.matches(
				/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/(#!\/)?[a-zA-Z0-9_]+\/?$/g,
				"Enter a valid twitter url",
			),
		instagram: yup
			.string()
			.notRequired()
			.matches(
				/^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?$/g,
				"Enter a valid instagram url",
			),
		linkedin: yup
			.string()
			.notRequired()
			.matches(
				/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/g,
				"Enter a valid linkedin url",
			),
		snapchat: yup.string().notRequired().min(3, "Enter a valid snapchat username"),
	})
	.noUnknown(true, { noExtensions: true, message: "Unknown field" })
	.strict(true);

export default settingsSocialValidation;
