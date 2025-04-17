"use client";
import { useFormik } from "formik";
import isEqual from "lodash.isequal";
import React from "react";
import { toast } from "sonner";
import {
	ChangePasswordTranslationAr,
	ChangePasswordTranslationEn,
} from "../../../../messages/Settings/ChangePassword";
import styles from "./../../Common/Grids/Spaces.module.css";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import PasswordInput from "@/Library/Common/TextInput/PasswordInput";
import HttpStatus from "@/Utils/httpStatus";
import SettingsPasswordValidationSchema from "@/app/[locale]/settings/password/_SettingsPassword/SettingsPassword.validation";
import { changePasswordAction } from "@/app/[locale]/settings/password/action";

const Password = ({ locale }: { locale: "ar" | "en" }) => {
	const t = locale === "en" ? ChangePasswordTranslationEn : ChangePasswordTranslationAr;

	const initialValues: { oldPassword: string; password: string; repeatPassword: string } = {
		oldPassword: "",
		password: "",
		repeatPassword: "",
	};

	const formik = useFormik({
		initialValues,
		validationSchema: SettingsPasswordValidationSchema,
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		onSubmit: handelPasswordChange,
	});

	async function handelPasswordChange(formValues: {
		oldPassword: string;
		password: string;
		repeatPassword: string;
	}) {
		const action = await changePasswordAction(formValues);
		if (action.status === 200) {
			toast.success("Password updated successfully");
			formik.resetForm();
		} else if (action.status === 406) {
			toast.error("Old password is incorrect");
		} else if (action.status === HttpStatus.CONFLICT) {
			toast.warning("Old password can't be the same as the new password.");
		} else toast.error("Password updated failed, please try again.");
	}

	const hasErrors = Object.keys(formik.errors).length > 0;
	const isFormChanged = isEqual(formik.values, formik.initialValues);

	return (
		<>
			{/*<PageHeader subTitle={t.Body} title={t.Header} />*/}
			<Section>
				<Row>
					<Col $lg={5}>
						<form onSubmit={formik.handleSubmit}>
							<PasswordInput
								label={t.Form.FormInputs.Input1.Label}
								placeholder={t.Form.FormInputs.Input1.PlaceHolder}
								id={"oldPassword"}
								name={"oldPassword"}
								value={formik.values.oldPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								ErrorMessage={
									formik.touched.oldPassword && formik.errors.oldPassword
										? `${formik.errors.oldPassword}`
										: ""
								}
								locale={locale}
							/>

							<PasswordInput
								checker
								label={t.Form.FormInputs.Input2.Label}
								placeholder={t.Form.FormInputs.Input2.PlaceHolder}
								id={"password"}
								name={"password"}
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								autoComplete="repeat-password"
								ErrorMessage={
									formik.touched.password && formik.errors.password ? formik.errors.password : null
								}
								locale={locale}
							/>

							<PasswordInput
								label={t.Form.FormInputs.Input3.Label}
								placeholder={t.Form.FormInputs.Input3.PlaceHolder}
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
								locale={locale}
							/>

							<Flexbox className={`${styles.marginTop32}`} $justify={"start"}>
								<Button
									buttonType={"submit"}
									body={t.Form.FormButtonBody}
									bgcolor={"primary"}
									size={"medium"}
									loading={formik.isSubmitting}
									disabled={hasErrors || formik.isSubmitting || isFormChanged}
								/>
							</Flexbox>
						</form>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default Password;
