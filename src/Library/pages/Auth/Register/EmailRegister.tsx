"use client";
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { SignupTranslationAR, SignupTranslationEn } from "../../../../../messages/Auth/Signup";
import styles from "../../../Common/Grids/Spaces.module.css";
import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import ErrorIcon from "@/Library/Common/Icongraphy/ErrorIcon/ErrorIcon";
import Notifications from "@/Library/Common/Notification/Notification";
import PasswordInput from "@/Library/Common/TextInput/PasswordInput";
import TextInput from "@/Library/Common/TextInput/TextInput";
import { Heading2, Paragraph } from "@/Library/Common/Typograhy/Typography";
import ConfirmEmail from "@/Library/pages/Auth/Register/ConfirmEmail";
import {
	registerInitialValues,
	registerValidationSchema,
} from "@/app/[locale]/(auth)/auth/register/_register/Validation";
import { registerAction } from "@/app/[locale]/(auth)/auth/register/action";

const EmailRegister = ({ locale }: Locale) => {
	const t = locale === "en" ? SignupTranslationEn : SignupTranslationAR;
	const [state, setState] = useState({
		loading: false,
		confirmEmail: false,
		error: false,
	});

	const { loading, confirmEmail, error } = state;

	const onSubmit = useCallback(
		async (values: {
			email: string;
			password: string;
			repeatPassword: string;
			firstName: string;
			lastName: string;
		}) => {
			if (loading) return;

			setState({
				...state,
				confirmEmail: false,
				error: false,
				loading: true,
			});

			try {
				const { failed } = await registerAction(values);
				if (failed) {
					setState({ ...state, error: true, loading: false });
					return;
				}

				setState({ ...state, confirmEmail: true });
			} catch (err) {
				setState({ ...state, error: true, loading: false });
			}
		},
		[loading, state],
	);
	return (
		<>
			{!confirmEmail && (
				<>
					<div>
						<Heading2 className={`${styles.marginTop48} ${styles.marginBottom}`}>
							{t.heading}
						</Heading2>
						<Paragraph className={`${styles.marginBottom16}`} color={"secondary"}>
							{t.body}
						</Paragraph>

						<div className={`${styles.marginBottom16} ${styles.marginBottom48}`}>
							{error && (
								<Notifications
									icon={<ErrorIcon />}
									type={"error"}
									caption={t.error}
									tittle={"ERROR"}
								/>
							)}
						</div>
						<Formik
							initialValues={registerInitialValues}
							validationSchema={registerValidationSchema}
							onSubmit={onSubmit}
						>
							{({ isSubmitting, values, handleChange, handleBlur, errors, touched }) => (
								<Form>
									<Row>
										<Col $md={6}>
											<TextInput
												onChange={handleChange}
												onBlur={handleBlur}
												name="firstName"
												value={values.firstName}
												label={t.form.input1.label}
												type={"text"}
												placeholder={t.form.input1.placeholder}
												errorMessage={touched.firstName && errors.firstName ? errors.firstName : ""}
												id=""
												statusss={errors.firstName && touched.firstName ? "error" : "Success"}
											/>
										</Col>
										<Col $md={6}>
											<TextInput
												onChange={handleChange}
												onBlur={handleBlur}
												name={"lastName"}
												value={values.lastName}
												errorMessage={touched.lastName && errors.lastName ? errors.lastName : ""}
												label={t.form.input2.label}
												type={"text"}
												placeholder={t.form.input2.placeholder}
												id=""
												statusss={errors.lastName && touched.lastName ? "error" : "Success"}
											/>
										</Col>
									</Row>
									<div className={styles.marginTop16}>
										<TextInput
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											name={"email"}
											errorMessage={touched.email && errors.email ? errors.email : ""}
											label={t.form.input3.label}
											placeholder={t.form.input3.placeholder}
											type={"email"}
											id=""
											statusss={errors.email && touched.email ? "error" : "Success"}
										/>
									</div>
									<div className={styles.marginTop16}>
										<PasswordInput
											checker
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											name={"password"}
											ErrorMessage={touched.password && errors.password ? errors.password : null}
											autoComplete="new-password"
											label={t.form.input4.label}
											placeholder={t.form.input4.placeholder}
											locale={locale}
										/>
									</div>
									<div className={styles.marginTop16}>
										<PasswordInput
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.repeatPassword}
											name={"repeatPassword"}
											ErrorMessage={
												touched.repeatPassword && errors.repeatPassword
													? errors.repeatPassword
													: null
											}
											autoComplete="new-password"
											label={t.form.input5.label}
											placeholder={t.form.input5.placeholder}
											locale={locale}
										/>
									</div>
									<div className={styles.marginTop16}>
										<Button
											disabled={isSubmitting}
											buttonType={isSubmitting ? "button" : "submit"}
											size={"medium"}
											body={t.button}
										/>
									</div>
									<div className={styles.marginTop16}>
										<Flexbox
											className={`${styles.marginTop16} ${styles.marginBottom16}`}
											$justify={"center"}
										>
											<Paragraph className={styles.marginTop40}>
												{t.AlreadyHaveAnAccount} <Link href={"/auth/login"}>{t.loginLink}</Link>
											</Paragraph>
										</Flexbox>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</>
			)}

			{confirmEmail && <ConfirmEmail />}
		</>
	);
};

export default EmailRegister;
