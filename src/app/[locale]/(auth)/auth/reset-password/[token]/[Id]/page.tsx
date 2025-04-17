"use client";
import { useFormik } from "formik";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import PasswordInput from "@/Library/Common/TextInput/PasswordInput";
import { verifyPasswordAction } from "@/app/[locale]/(auth)/auth/reset-password/[token]/[Id]/action";

const Page = ({ params }: { params: { locale: "en" | "ar"; Id: string; token: string } }) => {
	const validationSchema = yup.object().shape({
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
			.required("Repeat password is required"),
	});

	async function handelPasswordChange(formValues: { password: string; repeatPassword: string }) {
		const updateValues = { ...formValues, token: params.token, verifyToken: params.Id };
		const action = await verifyPasswordAction(updateValues);
		if (action.status === 200) {
			toast.success("Password updated successfully");
			redirect("/auth/login");
		} else if (action.status === 406) {
			toast.error("This token is incorrect or expired, please forgot password again.");
		} else {
			toast.error("Password updated failed");
		}
	}

	const initialValues: { password: string; repeatPassword: string } = {
		password: "",
		repeatPassword: "",
	};
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handelPasswordChange,
	});

	return (
		<>
			<PageHeader subTitle={"Create New Password"} title={"Create New Password"} />
			<form onSubmit={formik.handleSubmit}>
				<div>
					<PasswordInput
						checker
						label={"New Password"}
						placeholder={"Enter New Password"}
						id={"password"}
						name={"password"}
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						ErrorMessage={
							formik.touched.password && formik.errors.password ? formik.errors.password : null
						}
						locale={params.locale}
					/>
				</div>

				<div>
					<PasswordInput
						label={"Repeat New Password"}
						placeholder={"Enter re-Password"}
						id={"repeatPassword"}
						name={"repeatPassword"}
						value={formik.values.repeatPassword}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						ErrorMessage={
							formik.touched.repeatPassword && formik.errors.repeatPassword
								? `${formik.errors.repeatPassword}`
								: ""
						}
						locale={params.locale}
					/>
				</div>
				<Flexbox $justify={"end"}>
					<Button buttonType={"submit"} body={"Submit"} bgcolor={"primary"} />
				</Flexbox>
			</form>
		</>
	);
};

export default Page;
