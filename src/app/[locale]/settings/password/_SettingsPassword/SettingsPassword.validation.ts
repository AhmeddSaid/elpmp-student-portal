import * as yup from "yup";

const SettingsPasswordValidationSchema = yup.object().shape({
	oldPassword: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Old password is required")
		.max(150, "Maximum 150 character"),
	password: yup
		.string()
		.min(8, "Password must be at least 8 characters long.")
		.matches(/(?=.*[a-z])/, "Password must have at least one lowercase letter.")
		.matches(/(?=.*[A-Z])/, "Password must have at least one uppercase letter.")
		.matches(/(?=.*[0-9])/, "Password must have at least one digit.")
		.matches(/(?=.*[!@#$%^&*])/, "Password must have at least one special character.")
		.required("Password is required")
		.max(150, "Maximum 150 character"),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Repeat password is required")
		.max(150, "Maximum 150 character"),
});

export default SettingsPasswordValidationSchema;
