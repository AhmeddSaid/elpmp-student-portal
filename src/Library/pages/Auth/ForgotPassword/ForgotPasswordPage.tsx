"use client";
import { Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import Button from "../../../Common/Button/Button";
import styles from "../../../Common/Grids/Spaces.module.css";
import TextInput from "../../../Common/TextInput/TextInput";
import { BigParagraph, Heading2, Paragraph } from "../../../Common/Typograhy/Typography";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import ErrorIcon from "@/Library/Common/Icongraphy/ErrorIcon/ErrorIcon";
import Notifications from "@/Library/Common/Notification/Notification";
import { forgotPasswordAction } from "@/app/[locale]/(auth)/auth/forgot-password/action";

const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email("Enter a valid email address.")
		.matches(
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
			"Enter a valid email address.",
		)
		.required("Email is required"),
});

const initialValues = {
	email: "",
};

const ForgotPasswordPage = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		done: false,
	});

	const { loading, error, done } = state;

	const onSubmit = useCallback(
		async (values: { email: string }) => {
			if (loading) return;
			setState(prevState => ({
				...prevState,
				loading: true,
				error: false,
				done: false,
			}));

			try {
				const res = await forgotPasswordAction(values);
				if (res === 200) {
					setState(prevState => ({
						...prevState,
						loading: false,
						error: false,
						done: true,
					}));
				} else {
					setState(prevState => ({
						...prevState,
						loading: false,
						error: true,
						done: false,
					}));
				}
			} catch (err) {
				setState(prevState => ({
					...prevState,
					loading: false,
					error: true,
					done: false,
				}));
			}
		},
		[loading],
	);

	return (
		<>
			<Heading2 className={`${styles.marginTop48} ${styles.marginBottom8}`}>
				Forgot password
			</Heading2>
			<Paragraph className={`${styles.marginBottom24}`} color={"secondary"}>
				Connect with industry leaders, access exclusive resources, and land your dream job with
				ELPMP.COM. Free sign up, endless possibilities.
			</Paragraph>

			<div className={`${styles.marginBottom48}`}>
				{error && (
					<Notifications
						className={styles.marginBottom16}
						caption={"Something went wrong please try again."}
						tittle={"Error"}
						type={"error"}
						icon={<ErrorIcon />}
					/>
				)}
			</div>

			{done ? (
				<div>
					<Flexbox $justify={"center"}>
						<svg
							width="80"
							height="80"
							viewBox="0 0 80 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_357_2)">
								<path
									d="M35 53.535L22.5 41.0325L26.0325 37.5L35 46.465L53.9625 27.5L57.5 31.0375L35 53.535Z"
									fill="#07B262"
								/>
								<path
									d="M40 5C33.0777 5 26.3108 7.05271 20.5551 10.8986C14.7993 14.7444 10.3133 20.2107 7.66423 26.6061C5.01516 33.0015 4.32205 40.0388 5.67253 46.8282C7.02301 53.6175 10.3564 59.8539 15.2513 64.7487C20.1461 69.6436 26.3825 72.977 33.1719 74.3275C39.9612 75.678 46.9985 74.9848 53.3939 72.3358C59.7894 69.6867 65.2556 65.2007 69.1015 59.445C72.9473 53.6892 75 46.9223 75 40C75 30.7174 71.3125 21.815 64.7487 15.2513C58.185 8.68749 49.2826 5 40 5ZM40 70C34.0666 70 28.2664 68.2405 23.3329 64.9441C18.3994 61.6476 14.5543 56.9623 12.2836 51.4805C10.013 45.9987 9.4189 39.9667 10.5765 34.1473C11.734 28.3279 14.5912 22.9824 18.7868 18.7868C22.9824 14.5912 28.3279 11.734 34.1473 10.5764C39.9667 9.41888 45.9987 10.013 51.4805 12.2836C56.9623 14.5542 61.6477 18.3994 64.9441 23.3329C68.2405 28.2664 70 34.0666 70 40C70 47.9565 66.8393 55.5871 61.2132 61.2132C55.5871 66.8393 47.9565 70 40 70Z"
									fill="#07B262"
								/>
							</g>
							<defs>
								<clipPath id="clip0_357_2">
									<rect width="80" height="80" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</Flexbox>
					<Heading2 className={`${styles.marginBottom16} ${styles.marginTop16}`} center>
						Check Your Email{" "}
					</Heading2>
					<BigParagraph center color={"secondary"}>
						We’ve sent a password reset link to your email. Follow the instructions to reset your
						password. If you don’t see the email, check your spam folder or try again.
					</BigParagraph>
				</div>
			) : (
				<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={onSubmit}>
					{({ isSubmitting, values, handleChange, handleBlur, errors, touched }) => (
						<Form>
							<div className={styles.marginTop16}>
								<TextInput
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									name={"email"}
									placeholder={"Enter your email address"}
									label={"Email"}
									type="email"
									errorMessage={touched.email && errors.email ? errors.email : ""}
									statusss={errors.email && touched.email ? "error" : "Success"}
									id=""
								/>
							</div>
							<div className={styles.marginTop16}>
								<Button
									disabled={isSubmitting}
									buttonType={isSubmitting ? "button" : "submit"}
									size={"small"}
									body={"Send instructions"}
									loading={isSubmitting}
								/>
							</div>
						</Form>
					)}
				</Formik>
			)}
		</>
	);
};

export default ForgotPasswordPage;
