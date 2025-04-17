"use client";
import { useFormik } from "formik";
import isEqual from "lodash.isequal";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import { UserProfileAr, UserProfileEn } from "../../../../messages/Settings/UserProfile";
import styles from "./../../Common/Grids/Spaces.module.css";
import Avatar from "@/Library/Common/Avatar/Avatar";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import PhoneInputComponent from "@/Library/Common/PhoneInput/PhoneInput";
import Select from "@/Library/Common/Select/Select";
import TextInput from "@/Library/Common/TextInput/TextInput";
import { ProfileEditAvatar } from "@/Library/pages/ProfilePage/ProfilePage.styles";
import { userProfileAction } from "@/app/[locale]/settings/action";

export interface UserProfile {
	firstName: string;
	lastName: string;
	// username: string;
	userId: { email: string };
	phone: string;
	// preferredLanguage: string;
	// preferredTheme: string;
	// preferredCurrency: string;
	nationality: string;
	phoneExt: string;
	// avatar: string;
}

interface ProfilePageProps {
	data: UserProfile;
	locale: "en" | "ar";
	country: { nameEn: string; id: string }[];
}

const ProfilePage = ({ data, locale, country }: ProfilePageProps) => {
	const t = locale === "en" ? UserProfileEn : UserProfileAr;

	// const theme = [
	// 	{ name: "System", id: "SYSTEM" },
	// 	{ name: "Dark", id: "DARK" },
	// 	{ name: "Light", id: "LIGHT" },
	// ];
	// const languages = [
	// 	{ name: "Arabic", id: "ARABIC" },
	// 	{ name: "English", id: "ENGLISH" },
	// ];

	// const myCurrency = currency.map(
	// 	(item: { currencyName: string; currencySymbol: string; country: string }) => {
	// 		return { name: `${item.currencyName} (${item.currencySymbol})`, id: item.country };
	// 	},
	// );
	const myCountry = country.map((item: { nameEn: string; id: string }) => {
		return { name: item.nameEn, id: item.id };
	});
	const validationSchema = yup
		.object()
		.shape({
			// firstName: yup
			// 	.string()
			// 	.trim()
			// 	.min(2, locale ? "Minimum 2 characters" : "الاسم الاول يجب أن يحتوي على 2 حروف")
			// 	.required(locale ? "First name is required" : "برجاء ادخال الاسم الاول"),
			// lastName: yup
			// 	.string()
			// 	.trim()
			// 	.min(2, locale ? "Minimum 2 characters" : "الاسم الثاني يجب أن يحتوي على 2 حروف")
			// 	.required(locale ? "Last name is required" : "برجاء ادخال الاسم الثاني"),
			// username: yup.string().trim().notRequired(),
			phone: yup.string().trim().notRequired(),
			// avatar: yup.string().trim().notRequired(),
			// preferredTheme: yup
			// 	.string()
			// 	.required(locale ? "Preferred theme is required" : "برجاء ادخال الموضوع المفضل")
			// 	.default("SYSTEM"),
			// preferredLanguage: yup
			// 	.string()
			// 	.default("ENGLISH")
			// 	.required(locale ? "Preferred language is required" : "برجاء ادخال اللغة المفضلة"),
			nationality: yup.string().trim().notRequired(),
			phoneExt: yup.string().trim().notRequired(),
		})
		.noUnknown(true, { noExtensions: true, message: "Unknown field" })
		.strict(true);

	const initialValues = {
		firstName: data?.firstName,
		lastName: data?.lastName,
		// username: data?.username,
		email: data?.userId.email,
		phone: data?.phone,
		// preferredLanguage: data?.preferredLanguage,
		// preferredTheme: data?.preferredTheme,
		// preferredCurrency: data?.preferredCurrency,
		nationality: data?.nationality,
		phoneExt: data?.phoneExt,
		// avatar: data?.avatar,
	};

	async function handleProfile(formValues: {
		firstName: string;
		lastName: string;
		// username: string;
		phone: string | null;
		// preferredLanguage: string;
		// preferredTheme: string;
		// preferredCurrency: string;
		nationality: string | null;
		phoneExt: string | null;
		// avatar: string;
	}) {
		let { phone, nationality, phoneExt } = formValues;

		// const {
		// 	firstName,
		// 	lastName,
		// 	username,
		// 	preferredLanguage,
		// 	preferredTheme,
		// 	preferredCurrency,
		// 	avatar,
		// } = formValues;

		phone = phone ? phone : null;
		phoneExt = phoneExt ? phoneExt : null;
		nationality = nationality ? nationality : null;
		const updatedValues = {
			phone,
			nationality,
			phoneExt,
		};
		const action = await userProfileAction(updatedValues);
		if (action.status === 200) {
			toast.success("Profile Updated successfully");
		} else {
			toast.error("Profile  added Failed");
		}
	}

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleProfile,
	});

	const isFormChanged = isEqual(formik.values, formik.initialValues);
	const hasErrors = Object.keys(formik.errors).length > 0;

	// @ts-ignore
	return (
		<>
			<Section>
				<Row $justify={"start"}>
					<Col $lg={7}>
						<Flexbox className={`${styles.marginBottom32}`} $align={"center"} $gap={16}>
							<Avatar Size={"lg"} AvatarType={"Icon"} />
							<ProfileEditAvatar>Edit</ProfileEditAvatar>
						</Flexbox>

						<form onSubmit={formik.handleSubmit}>
							<Flexbox $direction={"column"} $gap={16}>
								<Row className={`${styles.marginTop12}`}>
									<Col $md={6}>
										<TextInput
											label={t.Form.FormInputs.Input1.Label}
											placeholder={t.Form.FormInputs.Input1.PlaceHolder}
											type="text"
											disabled
											id={"firstName"}
											name={"firstName"}
											value={formik.values.firstName}
										/>
									</Col>
									<Col $md={6}>
										<TextInput
											label={t.Form.FormInputs.Input2.Label}
											placeholder={t.Form.FormInputs.Input2.PlaceHolder}
											type="text"
											id={"lastName"}
											name={"lastName"}
											value={formik.values.lastName}
											disabled
										/>
									</Col>
								</Row>

								<div>
									<TextInput
										label={t.Form.FormInputs.Input3.Label}
										placeholder={t.Form.FormInputs.Input3.PlaceHolder}
										type="email"
										id={"email"}
										name={"email"}
										value={formik.values.email}
										disabled
									/>
								</div>
								<div>
									<Select
										label={t.Form.FormSelectOptions.Option1.Label}
										option={myCountry}
										id={"nationality"}
										name={"nationality"}
										value={formik.values.nationality}
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										locale={locale}
									/>
								</div>

								<div>
									<PhoneInputComponent
										//@ts-ignore
										onBlur={formik.handleBlur}
										onChange={(value: string, selectedCountry: { dialCode: string }) => {
											formik.setFieldValue("phoneExt", selectedCountry.dialCode);
											formik.setFieldValue("phone", value.slice(selectedCountry.dialCode.length));
										}}
										value={`${formik.values.phoneExt}${formik.values.phone}`}
										errorMessage={
											formik.touched.phone && formik.errors.phone ? `${formik.errors.phone}` : ""
										}
									/>
								</div>
								{/*<Row>*/}
								{/*	<Col $md={6}>*/}
								{/*		<TextInput*/}
								{/*			className={`${styles.marginBottom18}`}*/}
								{/*			label={t.Form.FormInputs.Input4.Label}*/}
								{/*			placeholder={t.Form.FormInputs.Input4.PlaceHolder}*/}
								{/*			type={"tel"}*/}
								{/*			id={"phoneExt"}*/}
								{/*			name={"phoneExt"}*/}
								{/*			value={formik.values.phoneExt}*/}
								{/*			onChange={formik.handleChange}*/}
								{/*			onBlur={formik.handleBlur}*/}
								{/*			errorMessage={*/}
								{/*				formik.touched.phoneExt && formik.errors.phoneExt*/}
								{/*					? `${formik.errors.phoneExt}`*/}
								{/*					: ""*/}
								{/*			}*/}
								{/*		/>*/}
								{/*	</Col>*/}
								{/*	<Col $md={6}>*/}
								{/*		<TextInput*/}
								{/*			label={t.Form.FormInputs.Input5.Label}*/}
								{/*			placeholder={t.Form.FormInputs.Input5.PlaceHolder}*/}
								{/*			type="tel"*/}
								{/*			id={"phoneNumber"}*/}
								{/*			name={"phone"}*/}
								{/*			value={formik.values.phone}*/}
								{/*			onBlur={formik.handleBlur}*/}
								{/*			onChange={formik.handleChange}*/}
								{/*			errorMessage={*/}
								{/*				formik.errors.phone && formik.touched.phone ? `${formik.errors.phone}` : ""*/}
								{/*			}*/}
								{/*		/>*/}
								{/*	</Col>*/}
								{/*</Row>*/}
								{/*<div>*/}
								{/*	<Select*/}
								{/*		label={t.Form.FormSelectOptions.Option2.Label}*/}
								{/*		option={languages}*/}
								{/*		id={"language"}*/}
								{/*		name={"preferredLanguage"}*/}
								{/*		value={formik.values.preferredLanguage}*/}
								{/*		onChange={formik.handleChange}*/}
								{/*		onBlur={formik.handleBlur}*/}
								{/*		locale={locale}*/}
								{/*	/>*/}
								{/*</div>*/}
								{/*<div>*/}
								{/*	<Select*/}
								{/*		label={t.Form.FormSelectOptions.Option3.Label}*/}
								{/*		option={theme}*/}
								{/*		id={"theme"}*/}
								{/*		name={"preferredTheme"}*/}
								{/*		value={formik.values.preferredTheme}*/}
								{/*		onChange={formik.handleChange}*/}
								{/*		onBlur={formik.handleBlur}*/}
								{/*		locale={locale}*/}
								{/*	/>*/}
								{/*</div>*/}

								<Flexbox $justify={"start"} className={`${styles.marginTop16}`}>
									<Button
										body={t.Form.FormButtonBody}
										buttonType={"submit"}
										bgcolor={"primary"}
										size="medium"
										disabled={isFormChanged || hasErrors}
										loading={formik.isSubmitting}
									/>
								</Flexbox>
							</Flexbox>
						</form>
					</Col>
				</Row>
			</Section>
			{/*<PageHeader subTitle={t.Body} title={t.Header} />*/}

			{/*<Notification*/}
			{/*	type={"information"}*/}
			{/*	tittle={"Info update"}*/}
			{/*	caption={"To update or change your email address and name, please contact us."}*/}
			{/*/>*/}
		</>
	);
};

export default ProfilePage;
