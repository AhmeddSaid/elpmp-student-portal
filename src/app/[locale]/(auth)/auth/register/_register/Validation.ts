import * as yup from "yup";
import passwordRegex from "../../../../../../../Regex/password.regex";

const EmailRegex: RegExp =
	/^(?:"[\w.!#$%&'*+/=?^_`{|}~-]+(?:\\.[\w.!#$%&'*+/=?^_`{|}~-]+)*"|[\w.!#$%&'*+/=?^_`{|}~-]+(?:\.[\w.!#$%&'*+/=?^_`{|}~-]+)*)@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

export const registerValidationSchema = yup
	.object()
	.shape({
		firstName: yup
			.string()
			.required("First name is required")
			.min(2, "First name must be at least 2 characters")
			.max(32, "Maximum 150 character"),
		lastName: yup
			.string()
			.required("Last name is required")
			.min(2, "Last name must be at least 2 characters")
			.max(32, "Maximum 150 character"),
		email: yup
			.string()
			.trim()
			.email({ en: "Please enter a valid email address.", ar: "" })
			.matches(EmailRegex, "Please enter a valid email address.")
			.required({ en: "Please enter your email address", ar: "" }),
		password: yup
			.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters long")
			.max(150, "Password cannot exceed 150 characters")
			.matches(
				passwordRegex,
				"Password must contain only English letters, numbers, and special characters",
			)
			.matches(/[a-z]/, "Password must contain at least one lowercase letter")
			.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
			.matches(/\d/, "Password must contain at least one digit")
			.matches(
				/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
				"Password must contain at least one special character",
			),
		repeatPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Passwords must match")
			.required("Repeat password is required"),
	})
	.noUnknown(true, { noExtensions: true, message: "Unknown field" })
	.strict(true);

export const registerInitialValues: {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	repeatPassword: string;
} = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	repeatPassword: "",
};
