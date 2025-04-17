"use client";
import { useFormik } from "formik";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import styles from "./../../Common/Grids/Spaces.module.css";
import Button from "@/Library/Common/Button/Button";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import TextInput from "@/Library/Common/TextInput/TextInput";
import {
	AddressHeadingContainer,
	AddressInputsContainer,
} from "@/Library/pages/Address/Address.styles";
import {
	addExamInitialValues,
	addExamValidationSchema,
} from "@/app/[locale]/(admin)/admin/exams/add/_addExamUtils/addExam.validation";
import { addExamAction } from "@/app/[locale]/(admin)/admin/exams/add/action";

export interface ExamValuesType {
	nameEn: string;
	nameAr: string;
	descriptionEn: string;
	descriptionAr: string;
	slug: string;
	image: string;
	priceUSD: string;
	priceEGP: string;
	discountedPriceUSD: string;
	discountedPriceEGP: string;
	period: string;
	isDeleted: boolean;
}

const AddExams = () => {
	async function handleExams(values: ExamValuesType) {
		const changedValues: Partial<ExamValuesType> = {};

		(Object.keys(values) as (keyof ExamValuesType)[]).forEach(key => {
			if (values[key] !== addExamInitialValues[key]) {
				// @ts-ignore
				changedValues[key] = values[key];
			}
		});

		if (Object.keys(changedValues).length > 0) {
			try {
				const { failed } = await addExamAction(changedValues);
				if (!failed) {
					toast.success("✔ Exam added successfully");
					revalidatePath("/admin/exams");
					redirect("/admin/exams");
				} else {
					toast.error("❌ Exam add Failed");
				}
			} catch (error) {
				toast.error("❌ Exam add Failed");
			}
		} else {
			toast.info("No changes detected.");
		}
	}

	const formik = useFormik({
		initialValues: addExamInitialValues,
		validationSchema: addExamValidationSchema,
		onSubmit: handleExams,
	});

	return (
		<>
			<AddressHeadingContainer>
				<PageHeader title={"add Exam"} subTitle={"Manage and update your Uxcel account info"} />
			</AddressHeadingContainer>

			<form onSubmit={formik.handleSubmit}>
				<AddressInputsContainer>
					<Row>
						<Col $md={6}>
							<TextInput
								label={"Exam name en"}
								placeholder={"placeholder"}
								type={"text"}
								id={"nameEn"}
								name={"nameEn"}
								value={formik.values.nameEn}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.nameEn && formik.touched.nameEn ? `${formik.errors.nameEn}` : ""
								}
								statusss={formik.errors.nameEn && formik.touched.nameEn ? "error" : "Success"}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"Exam name ar"}
								placeholder={"placeholder"}
								type={"text"}
								id={"nameAr"}
								name={"nameAr"}
								value={formik.values.nameAr}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.nameAr && formik.touched.nameAr ? `${formik.errors.nameAr}` : ""
								}
								statusss={formik.errors.nameAr && formik.touched.nameAr ? "error" : "Success"}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"description in en"}
								placeholder={"placeholder"}
								type={"text"}
								id={"descriptionEn"}
								name={"descriptionEn"}
								value={formik.values.descriptionEn}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.descriptionEn && formik.touched.descriptionEn
										? `${formik.errors.descriptionEn}`
										: ""
								}
								statusss={
									formik.errors.descriptionEn && formik.touched.descriptionEn ? "error" : "Success"
								}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"description in ar"}
								placeholder={"placeholder"}
								type={"text"}
								id={"descriptionAr"}
								name={"descriptionAr"}
								value={formik.values.descriptionAr}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.descriptionAr && formik.touched.descriptionAr
										? `${formik.errors.descriptionAr}`
										: ""
								}
								statusss={
									formik.errors.descriptionAr && formik.touched.descriptionAr ? "error" : "Success"
								}
							/>
						</Col>
						<div>
							<TextInput
								label={"image"}
								placeholder={"Enter image"}
								type={"text"}
								id={"image"}
								name={"image"}
								value={formik.values.image}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.image && formik.touched.image ? `${formik.errors.image}` : ""
								}
								statusss={formik.errors.image && formik.touched.image ? "error" : "Success"}
							/>
						</div>
						<div>
							<TextInput
								label={"slug"}
								placeholder={"placeholder"}
								type={"text"}
								id={"slug"}
								name={"slug"}
								value={formik.values.slug}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.slug && formik.touched.slug ? `${formik.errors.slug}` : ""
								}
								statusss={formik.errors.slug && formik.touched.slug ? "error" : "Success"}
							/>
						</div>
						<Col $md={6}>
							<TextInput
								label={"price USD"}
								placeholder={"Enter price in USD"}
								type={"number"}
								id={"priceUSD"}
								name={"priceUSD"}
								value={formik.values.priceUSD}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.priceUSD && formik.touched.priceUSD
										? `${formik.errors.priceUSD}`
										: ""
								}
								statusss={formik.errors.priceUSD && formik.touched.priceUSD ? "error" : "Success"}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"price EGP"}
								placeholder={"Enter price in EGP"}
								type={"number"}
								id={"priceEGP"}
								name={"priceEGP"}
								value={formik.values.priceEGP}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.priceEGP && formik.touched.priceEGP
										? `${formik.errors.priceEGP}`
										: ""
								}
								statusss={formik.errors.priceEGP && formik.touched.priceEGP ? "error" : "Success"}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"discounted Price USD"}
								placeholder={"Enter discounted Price USD"}
								type={"number"}
								id={"discountedPriceUSD"}
								name={"discountedPriceUSD"}
								value={formik.values.discountedPriceUSD}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.discountedPriceUSD && formik.touched.discountedPriceUSD
										? `${formik.errors.discountedPriceUSD}`
										: ""
								}
								statusss={
									formik.errors.discountedPriceUSD && formik.touched.discountedPriceUSD
										? "error"
										: "Success"
								}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"discounted Price EGP"}
								placeholder={"Enter discounted Price in EGP"}
								type={"number"}
								id={"discountedPriceEGP"}
								name={"discountedPriceEGP"}
								value={formik.values.discountedPriceEGP}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.discountedPriceEGP && formik.touched.discountedPriceEGP
										? `${formik.errors.discountedPriceEGP}`
										: ""
								}
								statusss={
									formik.errors.discountedPriceEGP && formik.touched.discountedPriceEGP
										? "error"
										: "Success"
								}
							/>
						</Col>
						<div className={styles.marginBottom16}>
							<TextInput
								caption={"The Defult Period Of Exam Is 90 Days"}
								label={"period"}
								placeholder={"Enter period"}
								type={"number"}
								id={"period"}
								name={"period"}
								value={formik.values.period}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.period && formik.touched.period ? `${formik.errors.period}` : ""
								}
								statusss={formik.errors.period && formik.touched.period ? "error" : "Success"}
							/>
						</div>
						<div>
							<Checkbox
								id={"isDeleted"}
								name={"isDeleted"}
								label={"is published"}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								checked={formik.values.isDeleted}
							/>
						</div>
					</Row>

					<Flexbox $justify={"end"}>
						<Button buttonType={"submit"} body={"Add Exam"} />
					</Flexbox>
				</AddressInputsContainer>
			</form>
		</>
	);
};
export default AddExams;
