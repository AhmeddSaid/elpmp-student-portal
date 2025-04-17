"use client";

import { useFormik } from "formik";
import isEqual from "lodash.isequal";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { toast } from "sonner";
import { SocialTranslationAr, SocialTranslationEn } from "../../../../messages/Settings/Social";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import FaceBookSolidIcon from "@/Library/Common/Icongraphy/FaceBookSolidIcon/FaceBookSolidIcon";
import LinkedInSolidIcon from "@/Library/Common/Icongraphy/LinkedInSolidIcon/LinkedInSolidIcon";
import SnapChatSolidIcon from "@/Library/Common/Icongraphy/SnapChatSolidIcon/SnapChatSolidIcon";
import SolidInstgram from "@/Library/Common/Icongraphy/SolidInstgram/SolidInstgram";
import XSolidIcon from "@/Library/Common/Icongraphy/XSolidIcon/XSolidIcon";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Separator from "@/Library/Common/Separator/Separator";
import TextInput from "@/Library/Common/TextInput/TextInput";
import { SocialInputContainer } from "@/Library/pages/socialPage/SocialPage.styles";
import settingsSocialValidation from "@/app/[locale]/settings/social/_settingsSocial/SettingsSocial.validation";
import { socialAction } from "@/app/[locale]/settings/social/action";

interface SocialPageProps {
	data: {
		instagram: string;
		facebook: string;
		linkedin: string;
		twitterX: string;
		snapchat: string;
	};
	locale: "en" | "ar";
}

const SocialPage = ({ data, locale }: SocialPageProps) => {
	const t = useMemo(() => (locale === "en" ? SocialTranslationEn : SocialTranslationAr), [locale]);
	const router = useRouter();
	const handleSocial = async (formValues: typeof data) => {
		try {
			const { failed } = await socialAction(formValues);
			if (!failed) {
				toast.success("Info updated successfully.");
				router.replace("/settings/social", { scroll: false });
			} else {
				toast.error("Failed to update, please try again.");
			}
		} catch {
			toast.error("Failed to update, please try again.");
		}
	};

	const formik = useFormik({
		initialValues: data,
		validationSchema: settingsSocialValidation,
		onSubmit: handleSocial,
	});

	const isFormChanged = isEqual(formik.values, formik.initialValues);
	const hasErrors = Object.keys(formik.errors).length > 0;

	const fields = [
		{
			id: "facebook",
			icon: <FaceBookSolidIcon />,
			label: t.Form.FormInputs.Input1.Label,
			placeholder: t.Form.FormInputs.Input1.PlaceHolder,
			// caption: "Ex: https://www.facebook.com/yourusername",
		},
		{
			id: "twitterX",
			icon: <XSolidIcon />,
			label: t.Form.FormInputs.Input2.Label,
			placeholder: t.Form.FormInputs.Input2.PlaceHolder,
			// caption: "Ex: https://www.x.com/yourusername",
		},
		{
			id: "linkedin",
			icon: <LinkedInSolidIcon />,
			label: t.Form.FormInputs.Input3.Label,
			placeholder: t.Form.FormInputs.Input3.PlaceHolder,
			// caption: "Ex: https://www.linkedin.com/in/yourusername",
		},
		{
			id: "instagram",
			icon: <SolidInstgram />,
			label: t.Form.FormInputs.Input4.Label,
			placeholder: t.Form.FormInputs.Input4.PlaceHolder,
			// caption: "Ex: https://www.instagram.com/yourusername",
		},
		{
			id: "snapchat",
			icon: <SnapChatSolidIcon />,
			label: t.Form.FormInputs.Input5.Label,
			placeholder: t.Form.FormInputs.Input5.PlaceHolder,
			// caption: "Ex: https://www.snapchat.com/add/yourusername",
		},
	];

	return (
		<>
			<Section>
				<Row>
					<Col $lg={7}>
						<Separator />
						<PageHeader subTitle={t.Body} title={t.Header} />

						<SocialInputContainer onSubmit={formik.handleSubmit}>
							<Row>
								{fields.map(field => (
									<Col key={field.id} className={styles.marginBottom16}>
										<TextInput
											icon={field.icon}
											label={field.label}
											placeholder={field.placeholder}
											type="text"
											id={field.id}
											name={field.id}
											value={formik.values[field.id as keyof typeof data]}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											errorMessage={
												formik.touched[field.id as keyof typeof data] &&
												formik.errors[field.id as keyof typeof data]
													? `${formik.errors[field.id as keyof typeof data]}`
													: ""
											}
											statusss={
												formik.touched[field.id as keyof typeof data] &&
												formik.errors[field.id as keyof typeof data]
													? "error"
													: "Success"
											}
											// caption={field.caption}
										/>
									</Col>
								))}
							</Row>
							<Flexbox $justify="start" className={`${styles.marginTop16}`}>
								<Button
									buttonType="submit"
									body={t.Form.FormButtonBody}
									size="medium"
									disabled={isFormChanged || hasErrors}
									loading={formik.isSubmitting}
								/>
							</Flexbox>
						</SocialInputContainer>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default SocialPage;
