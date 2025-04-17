"use client";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import Button from "@/Library/Common/Button/Button";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import Select from "@/Library/Common/Select/Select";
import TextInput from "@/Library/Common/TextInput/TextInput";
import {
	AddressHeading,
	AddressHeadingContainer,
	AddressInputsContainer,
	AddressSubHeading,
} from "@/Library/pages/Address/Address.styles";
import { addSubExamAction } from "@/app/[locale]/(admin)/admin/sub-exam/add/action";

interface AddSubExamType {
	nameEn: string;
	nameAr: string;
	descriptionEn: string;
	descriptionAr: string;
	isDeleted: boolean;
	slug: string;
	subExamType: string;
	exam: string;
	tag: string;
	passingScore: number;
	durationPerQuestion: number;
}

const AddSubExam = ({
	locale,
	tags,
	exams,
}: {
	locale: string;
	tags: { nameEn: string; nativeName: string; id: string }[];
	exams: { nameEn: string; nameAr: string; id: string }[];
}) => {
	const mySubExamType = [
		{ name: "All Exams", id: "ALLEXAMS" },
		{ name: "Domain", id: "DOMAIN" },
		{ name: "Chapter", id: "CHAPTER" },
		{ name: "Other", id: "OTHER" },
	];

	const validationSchema = yup
		.object()
		.shape({
			nameEn: yup
				.string()
				.trim()
				.min(3, "Min 3 characters")
				.max(1024, "max 1024 characters")
				.matches(
					/^[a-zA-Z\s]+$/,
					locale
						? "Sub Exam's name must contain only English letters"
						: "اسم الامتحان يجب أن يحتوي على أحرف انجليزية فقط",
				)
				.required("SubExam's name is required"),
			nameAr: yup
				.string()
				.trim()
				.min(3)
				.matches(
					/^[\u0600-\u06FF\s]+$/,
					locale
						? "Sub Exam's name must contain only Arabic letters"
						: "اسم الامتحان يجب أن يحتوي على أحرف عربية فقط",
				)
				.required("اسم الامتحان مطلوب"),
			descriptionEn: yup
				.string()
				.trim()
				.min(3, "Min 3 characters")
				.max(1024, "max 1024 characters")
				.matches(
					/^[a-zA-Z\s]+$/,
					locale
						? "Description must contain only English letters"
						: "الوصف يجب أن يحتوي على أحرف انجليزية فقط",
				)
				.required("Description is required"),
			descriptionAr: yup
				.string()
				.trim("يجب ألا يحتوي الوصف على مسافات بادئة أو لاحقة")
				.min(3)
				.matches(
					/^[\u0600-\u06FF\s]+$/,
					locale
						? "Description name must contain only Arabic letters"
						: "الوصف يجب أن يحتوي على أحرف عربية فقط",
				)
				.required("الوصف مطلوب"),
			isDeleted: yup.boolean().default(false).notRequired(),
			slug: yup
				.string()
				.trim()
				.min(3, "Minimum 3 characters")
				.matches(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, underscores, and hyphens are allowed")
				.required(),
			subExamType: yup
				.string()
				.trim()
				.required(locale ? "subExamType is required" : "subExamType مطلوب"),
			exam: yup
				.string()
				.trim()
				.required(locale ? "exam is required" : "امتحان مطلوب"),
			tag: yup
				.string()
				.trim()
				.required(locale ? "tag is required" : "tag مطلوب"),
		})
		.noUnknown(true, { noExtensions: true, message: "Unknown field" })
		.strict(true);

	const tagsData = tags.map((item: { nameEn: string; nativeName: string; id: string }) => {
		return { name: `${item.nameEn}`, id: item.id };
	});
	const examsData = exams.map((item: { nameEn: string; nameAr: string; id: string }) => {
		return { name: locale === "en" ? item.nameEn : item.nameAr, id: item.id };
	});

	const initialValues: AddSubExamType = {
		nameEn: "",
		nameAr: "",
		descriptionEn: "",
		descriptionAr: "",
		isDeleted: false,
		slug: "",
		subExamType: mySubExamType[0].id,
		exam: examsData[0].id,
		tag: tagsData[0].id,
		passingScore: 0,
		durationPerQuestion: 30,
	};

	async function handelAddExam(formValues: AddSubExamType) {
		const { failed } = await addSubExamAction({ formValues });
		if (!failed) {
			toast.success("Sub Exam added successfully");
		} else {
			toast.error("Something went wrong");
		}
	}

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handelAddExam,
	});

	return (
		<>
			<AddressHeadingContainer>
				<AddressHeading>add Sub Exam</AddressHeading>
				<AddressSubHeading>Manage and update your Uxcel account info</AddressSubHeading>
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
									formik.errors.nameEn && formik.touched.nameEn ? formik.errors.nameEn : ""
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
								value={formik.values.nameAr}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.nameAr && formik.touched.nameAr ? formik.errors.nameAr : ""
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
								value={formik.values.descriptionEn}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.descriptionEn && formik.touched.descriptionEn
										? formik.errors.descriptionEn
										: ""
								}
							/>
						</Col>{" "}
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
										? formik.errors.descriptionAr
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
							value={formik.values.slug}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							errorMessage={formik.errors.slug && formik.touched.slug ? formik.errors.slug : ""}
						/>
					</div>
					<div>
						<TextInput
							label={"Passing Score"}
							placeholder={"Enter passing Score"}
							type={"number"}
							id={"passingScore"}
							name={"passingScore"}
							value={formik.values.passingScore}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							// errorMessage={formik.errors.passingScore && formik.touched.passingScore ? formik.errors.passingScore : ""}
						/>
					</div>
					{/*/!*<div>*!/*/}
					{/*/!*	<TextInput*!/*/}
					{/*/!*		label={"Duration"}*!/*/}
					{/*/!*		placeholder={"Enter Duration"}*!/*/}
					{/*/!*		type={"number"}*!/*/}
					{/*/!*		id={"duration"}*!/*/}
					{/*/!*		value={formik.values.duration}*!/*/}
					{/*/!*		onChange={formik.handleChange}*!/*/}
					{/*/!*		onBlur={formik.handleBlur}*!/*/}
					{/*/!*		errorMessage={formik.errors.duration && formik.touched.duration ? formik.errors.duration : ""}*!/*/}
					{/*/!*	/>*!/*/}
					{/*/!*</div>*!/*/}
					<div>
						<Select
							label={"tag"}
							option={tagsData}
							id={"tag"}
							name={"tag"}
							value={formik.values.tag}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>

					<div>
						<TextInput
							label={"durationPerQuestion"}
							placeholder={"placeholder"}
							type={"number"}
							id={"durationPerQuestion"}
							name={"durationPerQuestion"}
							value={formik.values.durationPerQuestion}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							errorMessage={
								formik.errors.durationPerQuestion && formik.touched.durationPerQuestion
									? formik.errors.durationPerQuestion
									: ""
							}
						/>
					</div>
					<div>
						<Select
							label={"Exam"}
							option={examsData}
							id={"exam"}
							name={"exam"}
							value={formik.values.exam}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					<div>
						<Select
							label={"Sub Exam Type"}
							option={mySubExamType}
							id={"subExamType"}
							name={"subExamType"}
							value={formik.values.subExamType}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					<div>
						<Checkbox
							id={"isDeleted"}
							name={"isDeleted"}
							label={"Is Published"}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
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

export default AddSubExam;
