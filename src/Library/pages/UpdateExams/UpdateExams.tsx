"use client";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import TextInput from "@/Library/Common/TextInput/TextInput";
import {
	AddressHeading,
	AddressHeadingContainer,
	AddressInputsContainer,
	AddressSubHeading,
} from "@/Library/pages/Address/Address.styles";
import {
	updateExamForm1Action,
	updateExamForm2Action,
} from "@/app/[locale]/(admin)/admin/exams/[examId]/action";

const UpdateExams = ({
	form1,
	form2,
	id,
	locale,
}: {
	locale: Locale;
	form1: {
		image: string;
		nameEn: string;
		nameAr: string;
		descriptionEn: string;
		descriptionAr: string;
		slug: string;
		isDeleted: boolean;
	};
	id: string;
	form2: {
		priceUSD: string;
		priceEGP: string;
		discountedPriceUSD: string;
		discountedPriceEGP: string;
		period: string;
		exam: string;
	};
}) => {
	const { image, nameEn, nameAr, descriptionEn, descriptionAr, slug, isDeleted } = form1;
	const { priceUSD, priceEGP, discountedPriceUSD, discountedPriceEGP, period, exam } = form2;
	const PriceValidationSchema = yup
		.number()
		.positive(locale ? "Price must be positive" : "السعر يجب أن يكون رقم  موجب")
		.min(
			0.01,
			locale ? "Price must be greater than or equal to 0.01" : "السعر يجب أن يكون اكبر من 0.01",
		)
		.max(
			1000000,
			locale
				? "Price must be less than or equal to 1,000,000"
				: "السعر يجب أن يكون اقل من 1,000,000",
		)
		.notRequired();

	const validationSchema1 = yup.object().shape({
		nameEn: yup
			.string()
			.trim()
			.min(3, locale ? "Min 3 characters" : "يجب أن لا يقل الاسم عن 3 أحرف")
			.max(1024, locale ? "Max 1024 characters" : "يجب أن لا يزيد الاسم عن 1024 حرف")
			.matches(
				/^[a-zA-Z\s]+$/,
				locale
					? "Exam's name must contain only English letters"
					: "اسم الامتحان يجب أن يحتوي على أحرف انجليزية فقط",
			)
			.notRequired(),

		nameAr: yup
			.string()
			.trim()
			.min(3, locale ? "Min 3 characters" : "يجب أن لا يقل الاسم عن 3 أحرف")
			.matches(
				/^[\u0600-\u06FF\s]+$/,
				locale
					? "Exam's name must contain only Arabic letters"
					: "اسم الامتحان يجب أن يحتوي على أحرف عربية فقط",
			)
			.notRequired(),

		descriptionEn: yup
			.string()
			.trim()
			.min(3, locale ? "Min 3 characters" : "يجب أن لا يقل الوصف عن 3 أحرف")
			.max(1024, locale ? "Max 1024 characters" : "يجب أن لا يزيد الوصف عن 1024 حرف")
			.matches(
				/^[a-zA-Z\s]+$/,
				locale
					? "Description must contain only English letters"
					: "الوصف يجب أن يحتوي على أحرف انجليزية فقط",
			)
			.notRequired(),

		descriptionAr: yup
			.string()
			.trim(
				locale ? "No leading or trailing spaces" : "يجب ألا يحتوي الوصف على مسافات بادئة أو لاحقة",
			)
			.min(3, locale ? "Min 3 characters" : "يجب أن لا يقل الوصف عن 3 أحرف")
			.matches(
				/^[\u0600-\u06FF\s]+$/,
				locale
					? "Description must contain only Arabic letters"
					: "الوصف يجب أن يحتوي على أحرف عربية فقط",
			)
			.notRequired(),

		slug: yup
			.string()
			.trim()
			.notRequired()
			.min(3, locale ? "Min 3 characters" : "يجب أن لا يقل الرابط عن 3 أحرف")
			.matches(
				/^[a-zA-Z0-9_-]+$/,
				locale
					? "Only letters, numbers, underscores, and hyphens are allowed"
					: "يسمح فقط بالأحرف والأرقام والشرطات والشرطات السفلية",
			),
		isDeleted: yup.boolean().default(false).notRequired(),
		image: yup.string().trim().notRequired(),
	});
	const initialValues1 = {
		nameEn,
		nameAr,
		descriptionEn,
		descriptionAr,
		slug,
		isDeleted,
		image,
	};

	const validationSchema2 = yup.object().shape({
		priceUSD: PriceValidationSchema,
		priceEGP: PriceValidationSchema,
		discountedPriceUSD: PriceValidationSchema,
		discountedPriceEGP: PriceValidationSchema,
		period: yup.number().integer().positive().notRequired(),
	});
	const initialValues2 = {
		priceUSD,
		priceEGP,
		discountedPriceUSD,
		discountedPriceEGP,
		period,
	};
	const formik1 = useFormik({
		initialValues: initialValues1,
		validationSchema: validationSchema1,
		onSubmit: () => {},
	});
	const formik2 = useFormik({
		initialValues: initialValues2,
		validationSchema: validationSchema2,
		onSubmit: () => {},
	});

	const getChangedValues = (
		values: {
			nameEn?: string;
			nameAr?: string;
			descriptionEn?: string;
			descriptionAr?: string;
			slug?: string;
			isDeleted?: boolean;
			image?: string;
			priceUSD?: string;
			priceEGP?: string;
			discountedPriceUSD?: string;
			discountedPriceEGP?: string;
			period?: string;
		},
		initialValues: {
			nameEn?: string;
			nameAr?: string;
			descriptionEn?: string;
			descriptionAr?: string;
			slug?: string;
			isDeleted?: boolean;
			image?: string;
			priceUSD?: string;
			priceEGP?: string;
			discountedPriceUSD?: string;
			discountedPriceEGP?: string;
			period?: string;
		},
	) => {
		const changedValues = {};
		Object.keys(values).forEach(key => {
			// @ts-ignore
			if (values[key] !== initialValues[key]) {
				// @ts-ignore
				changedValues[key] = values[key];
			}
		});
		return changedValues;
	};

	const handleUpdateExams = async (event: React.FormEvent) => {
		event.preventDefault();

		const form1Errors = await formik1.validateForm();
		const form2Errors = await formik2.validateForm();

		const isForm1Valid = Object.keys(form1Errors).length === 0;
		const isForm2Valid = Object.keys(form2Errors).length === 0;

		if (isForm1Valid && isForm2Valid) {
			const changedValuesForm1 = getChangedValues(formik1.values, initialValues1);
			const changedValuesForm2 = getChangedValues(formik2.values, initialValues2);

			try {
				if (Object.keys(changedValuesForm1).length > 0) {
					// @ts-ignore
					await updateExamForm1Action(changedValuesForm1, exam);
				}

				if (Object.keys(changedValuesForm2).length > 0) {
					// @ts-ignore
					await updateExamForm2Action(changedValuesForm2, id);
				}
				toast.error(" Exam added successfully");
			} catch (error) {
				toast.error("❌ Exam update Failed");
			}
		} else {
			toast.error("❌ Exam update Failed");
		}
	};

	return (
		<>
			<AddressHeadingContainer>
				<AddressHeading>Update Exams</AddressHeading>
				<AddressSubHeading>Manage and update your Uxcel account info</AddressSubHeading>
			</AddressHeadingContainer>
			<form onSubmit={handleUpdateExams}>
				<AddressInputsContainer>
					<div>
						<TextInput
							label={"image"}
							placeholder={"Enter image"}
							type={"text"}
							id={"image"}
							name={"image"}
							value={formik1.values.image}
							onChange={formik1.handleChange}
							onBlur={formik1.handleBlur}
							errorMessage={
								formik1.errors.image && formik1.touched.image ? `${formik1.errors.image}` : ""
							}
						/>
					</div>
					<Row>
						<Col $md={6}>
							<TextInput
								label={"Exam name en"}
								placeholder={"placeholder"}
								type={"text"}
								id={"nameEn"}
								name={"nameEn"}
								value={formik1.values.nameEn}
								onChange={formik1.handleChange}
								onBlur={formik1.handleBlur}
								errorMessage={
									formik1.errors.nameEn && formik1.touched.nameEn ? `${formik1.errors.nameEn}` : ""
								}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"Exam name ar"}
								placeholder={"placeholder"}
								type={"text"}
								id={"nameAr"}
								name={"nameAr"}
								value={formik1.values.nameAr}
								onChange={formik1.handleChange}
								onBlur={formik1.handleBlur}
								errorMessage={
									formik1.errors.nameAr && formik1.touched.nameAr ? `${formik1.errors.nameAr}` : ""
								}
							/>
						</Col>
					</Row>
					<Row>
						<Col $md={6}>
							<TextInput
								label={"description in en"}
								placeholder={"placeholder"}
								type={"text"}
								id={"descriptionEn"}
								name={"descriptionEn"}
								value={formik1.values.descriptionEn}
								onChange={formik1.handleChange}
								onBlur={formik1.handleBlur}
								errorMessage={
									formik1.errors.descriptionEn && formik1.touched.descriptionEn
										? `${formik1.errors.descriptionEn}`
										: ""
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
								value={formik1.values.descriptionAr}
								onChange={formik1.handleChange}
								onBlur={formik1.handleBlur}
								errorMessage={
									formik1.errors.descriptionAr && formik1.touched.descriptionAr
										? `${formik1.errors.descriptionAr}`
										: ""
								}
							/>
						</Col>
					</Row>

					<div>
						<TextInput
							label={"slug"}
							placeholder={"placeholder"}
							type={"text"}
							id={"slug"}
							name={"slug"}
							value={formik1.values.slug}
							onChange={formik1.handleChange}
							onBlur={formik1.handleBlur}
							errorMessage={
								formik1.errors.slug && formik1.touched.slug ? `${formik1.errors.slug}` : ""
							}
						/>
					</div>
					<Row>
						<Col $md={6}>
							<TextInput
								label={"price USD"}
								placeholder={"Enter price in USD"}
								type={"number"}
								id={"priceUSD"}
								name={"priceUSD"}
								value={formik2.values.priceUSD}
								onChange={formik2.handleChange}
								onBlur={formik2.handleBlur}
								errorMessage={
									formik2.errors.priceUSD && formik2.touched.priceUSD
										? `${formik2.errors.priceUSD}`
										: ""
								}
							/>
						</Col>
						<Col $md={6}>
							<TextInput
								label={"price EGP"}
								placeholder={"Enter price in EGP"}
								type={"number"}
								id={"priceEGP"}
								name={"priceEGP"}
								value={formik2.values.priceEGP}
								onChange={formik2.handleChange}
								onBlur={formik2.handleBlur}
								errorMessage={
									formik2.errors.priceEGP && formik2.touched.priceEGP
										? `${formik2.errors.priceEGP}`
										: ""
								}
							/>
						</Col>
					</Row>
					<Row>
						<Col $md={6}>
							<TextInput
								label={"discounted Price USD"}
								placeholder={"Enter discounted Price USD"}
								type={"number"}
								id={"discountedPriceUSD"}
								name={"discountedPriceUSD"}
								value={formik2.values.discountedPriceUSD}
								onChange={formik2.handleChange}
								onBlur={formik2.handleBlur}
								errorMessage={
									formik2.errors.discountedPriceUSD && formik2.touched.discountedPriceUSD
										? `${formik2.errors.discountedPriceUSD}`
										: ""
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
								value={formik2.values.discountedPriceEGP}
								onChange={formik2.handleChange}
								onBlur={formik2.handleBlur}
								errorMessage={
									formik2.errors.discountedPriceEGP && formik2.touched.discountedPriceEGP
										? `${formik2.errors.discountedPriceEGP}`
										: ""
								}
							/>
						</Col>
					</Row>
					<div>
						<TextInput
							label={"period"}
							placeholder={"Enter period"}
							type={"number"}
							id={"period"}
							name={"period"}
							value={formik2.values.period}
							onChange={formik2.handleChange}
							onBlur={formik2.handleBlur}
							errorMessage={
								formik2.errors.period && formik2.touched.period ? `${formik2.errors.period}` : ""
							}
						/>
					</div>
					<div>
						<Checkbox
							id={"isDeleted"}
							name={"isDeleted"}
							label={"is published"}
							onChange={formik1.handleChange}
							onBlur={formik1.handleBlur}
						/>
					</div>
					<Flexbox $justify={"end"}>
						<Button buttonType={"submit"} body={"Save"} />
					</Flexbox>
				</AddressInputsContainer>
			</form>
		</>
	);
};

export default UpdateExams;
