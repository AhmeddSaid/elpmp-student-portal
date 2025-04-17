"use client";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { LoginTranslationAr, LoginTranslationEn } from "../../../../../messages/Auth/Login";
import httpStatus from "../../../../Utils/httpStatus";
import Button from "../../../Common/Button/Button";
import { Flexbox } from "../../../Common/Grids/Grids";
import styles from "../../../Common/Grids/Spaces.module.css";
import PasswordInput from "../../../Common/TextInput/PasswordInput";
import TextInput from "../../../Common/TextInput/TextInput";
import { Heading2, Paragraph } from "../../../Common/Typograhy/Typography";
import { Locale } from "@/Global";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import ErrorIcon from "@/Library/Common/Icongraphy/ErrorIcon/ErrorIcon";
import InfoIcon from "@/Library/Common/Icongraphy/InfoIcon/Infoicon";
import Notifications from "@/Library/Common/Notification/Notification";
import { LoginValidationSchema } from "@/app/[locale]/(auth)/auth/login/_LoginUtils/Login.validation";
import { loginAction } from "@/app/[locale]/(auth)/auth/login/action";

const initialValues = {
	email: "",
	password: "",
	rememberMe: false,
};

const Login = ({ locale }: Locale) => {
	const t = locale === "en" ? LoginTranslationEn : LoginTranslationAr;
	const router = useRouter();
	const [state, setState] = useState({
		loading: false,
		error: false,
		invalid: false,
		verifyEmail: false,
		suspended: false,
		twoFactorAuth: false,
	});

	const { loading, error, invalid, verifyEmail, suspended } = state;

	const onSubmit = useCallback(
		async (values: { email: string; rememberMe: boolean; password: string }) => {
			if (loading) return;
			setState({
				...state,
				error: false,
				invalid: false,
				verifyEmail: false,
				suspended: false,
				twoFactorAuth: false,
				loading: true,
			});

			try {
				const res = await loginAction(values);

				switch (res.status) {
					case httpStatus.NOT_ACCEPTABLE:
						setState({
							...state,
							verifyEmail: false,
							suspended: false,
							twoFactorAuth: false,
							error: false,
							invalid: true,
							loading: false,
						});
						return;
					case httpStatus.LOCKED:
						setState({
							...state,
							invalid: false,
							verifyEmail: false,
							twoFactorAuth: false,
							error: false,
							suspended: true,
							loading: false,
						});
						return;
					case httpStatus.SUCCESS:
						router.push("/");
						return;
					case httpStatus.PARTIAL_CONTENT:
						setState({
							...state,
							verifyEmail: true,
							loading: false,
							invalid: false,
							twoFactorAuth: false,
							error: false,
							suspended: false,
						});
						return;
					case httpStatus.MOVED_PERMANENTLY:
						router.push("/2fa");
						return;
					default:
						setState({
							...state,
							invalid: false,
							verifyEmail: false,
							suspended: false,
							twoFactorAuth: false,
							error: true,
							loading: false,
						});
						return;
				}
			} catch (err) {
				setState({
					...state,
					error: true,
					loading: false,
					invalid: false,
					verifyEmail: false,
					twoFactorAuth: false,
					suspended: false,
				});
				return;
			}
		},
		[loading, state, router],
	);

	return (
		<>
			<Heading2 className={`${styles.marginTop48} ${styles.marginBottom8}`}>{t.heading}</Heading2>
			<Paragraph className={`${styles.marginBottom24}`} color={"secondary"}>
				{t.body}
			</Paragraph>

			<div className={`${styles.marginBottom56} ${styles.marginTop48}`}>
				{invalid && (
					<Notifications
						className={styles.marginBottom16}
						tittle={"Invalid Credentials"}
						caption={t.invalid}
						type={"error"}
						icon={<ErrorIcon />}
					/>
				)}

				{error && (
					<Notifications
						className={styles.marginBottom16}
						caption={"Something went wrong please try again."}
						tittle={"Error"}
						type={"error"}
						icon={<ErrorIcon />}
					/>
				)}

				{suspended && (
					<Notifications
						className={styles.marginBottom16}
						caption={t.suspended}
						tittle={"Your account has been suspended."}
						type={"error"}
						icon={<ErrorIcon />}
					/>
				)}

				{verifyEmail && (
					<Notifications
						className={styles.marginBottom16}
						caption={t.verifyEmail}
						tittle={"Verify your email."}
						type={"information"}
						icon={<InfoIcon />}
					/>
				)}
			</div>

			<Formik
				initialValues={initialValues}
				validationSchema={LoginValidationSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting, values, handleChange, handleBlur, errors, touched }) => (
					<Form>
						<div className={styles.marginTop16}>
							<TextInput
								label={t.form.input1.label}
								id="email"
								type="email"
								placeholder={t.form.input1.placeholder}
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								statusss={errors.email && touched.email ? "error" : "Success"}
								errorMessage={errors.email && touched.email ? errors.email : undefined}
							/>
						</div>
						<div className={styles.marginTop16}>
							<PasswordInput
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								name={"password"}
								ErrorMessage={touched.password && errors.password ? errors.password : null}
								autoComplete="password"
								label={t.form.input2.label}
								placeholder={t.form.input2.placeholder}
								locale={locale}
							/>
						</div>
						<Flexbox $justify={"space-between"} $align={"center"}>
							<Checkbox
								name={"rememberMe"}
								onChange={handleChange}
								onBlur={handleBlur}
								// @ts-ignore
								value={values.rememberMe}
								label={"Remember me"}
								checked={values.rememberMe}
							/>
							<Paragraph>
								<Link href={"/auth/forgot-password"}>{t.forgotPassword}</Link>
							</Paragraph>
						</Flexbox>
						<div className={`${styles.marginTop16} ${styles.marginBottom16}`}>
							<Button
								disabled={isSubmitting}
								buttonType={isSubmitting ? "button" : "submit"}
								size={"medium"}
								body={t.button}
							/>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default Login;
