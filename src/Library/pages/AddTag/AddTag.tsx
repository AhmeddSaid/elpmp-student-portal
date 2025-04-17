"use client";

import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import NameArRegex from "../../../../Regex/NameAr.regex";
import NameEnRegex from "../../../../Regex/NameEn.regex";
import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import Select from "@/Library/Common/Select/Select";
import TextInput from "@/Library/Common/TextInput/TextInput";
import {
	AddressHeading,
	AddressHeadingContainer,
	AddressInputsContainer,
	AddressSubHeading,
} from "@/Library/pages/Address/Address.styles";
import { addTagAction } from "@/app/[locale]/(admin)/admin/exams/tag/add/action";

const AddTag = ({ locale }: Locale) => {
	const validationSchema = yup
		.object()
		.shape({
			nameEn: yup
				.string()
				.trim()
				.min(3, locale === "en" ? "Minimum 3 characters" : "عدد الحروف يجب أن يكون على الاقل 3")
				.max(1024, "max 1024 characters")
				.matches(
					NameEnRegex,
					locale === "en"
						? "Tag's name must contain only English letters"
						: "اسم العلامة يجب أن يحتوي على أحرف انجليزية فقط",
				)
				.required(locale === "en" ? "Tag's name is required" : "اسم العلامة مطلوب"),
			nameAr: yup
				.string()
				.trim()
				.min(3, locale === "en" ? "Minimum 3 characters" : "عدد الحروف يجب أن يكون على الاقل 3")
				.matches(
					NameArRegex,
					locale === "en"
						? "Tag's name must contain only Arabic letters"
						: "اسم العلامة يجب أن يحتوي على أحرف عربية فقط",
				)
				.required(locale === "en" ? "Tag's name is required" : "اسم العلامة مطلوب"),
			descriptionEn: yup
				.string()
				.trim()
				.min(3, "Minimum 3 characters")
				.max(1024, "max 1024 characters")
				.matches(
					NameEnRegex,
					locale === "en"
						? "Description must contain only English letters"
						: "الوصف يجب أن يحتوي على أحرف انجليزية فقط",
				)
				.required(locale === "en" ? "Description is required" : "الوصف مطلوب"),
			descriptionAr: yup
				.string()
				.trim()
				.min(3)
				.matches(
					NameArRegex,
					locale === "en"
						? "Description name must contain only Arabic letters"
						: "الوصف يجب أن يحتوي على أحرف عربية فقط",
				)
				.required("الوصف مطلوب"),
			type: yup.string().required("Tag is required"),
			isDeleted: yup.boolean().default(false).notRequired(),
		})
		.noUnknown(true, { noExtensions: true, message: "Unknown field" })
		.strict(true);

	const initialValues = {
		nameEn: "",
		nameAr: "",
		descriptionEn: "",
		descriptionAr: "",
		isDeleted: false,
		type: null,
	};

	async function handleTag(formValues: {
		nameEn: string;
		nameAr: string;
		descriptionEn: string;
		descriptionAr: string;
		isDeleted: boolean;
		type: string | null;
	}) {
		const action = await addTagAction(formValues);
		if (action.res === 200) {
			toast.success(locale === "en" ? "✔ Tag added successfully" : "✔ تم إضافة العلامة بنجاح");
		} else {
			toast.error(locale === "en" ? "❌ Tag add Failed" : "❌ فشل إضافة العلامة");
		}
	}

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleTag,
	});

	return (
		<>
			<AddressHeadingContainer>
				<AddressHeading>{locale === "en" ? "Add Tag" : "إضافة علامة"}</AddressHeading>
				<AddressSubHeading>
					{locale === "en"
						? "Manage and update your  account info"
						: "إدارة وتحديث معلومات حسابك في "}
				</AddressSubHeading>
			</AddressHeadingContainer>
			<form onSubmit={formik.handleSubmit}>
				<AddressInputsContainer>
					<div>
						<TextInput
							label={locale === "en" ? "Tag name (English)" : "اسم العلامة (بالإنجليزية)"}
							placeholder={
								locale === "en" ? "Enter tag name in English" : "أدخل اسم العلامة باللغة الإنجليزية"
							}
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
					</div>
					<div>
						<TextInput
							label={locale === "en" ? "Tag name (Arabic)" : "اسم العلامة (بالعربية)"}
							placeholder={
								locale === "en" ? "Enter tag name in Arabic" : "أدخل اسم العلامة باللغة العربية"
							}
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
					</div>
					<div>
						<TextInput
							label={locale === "en" ? "Description (English)" : "الوصف (بالإنجليزية)"}
							placeholder={
								locale === "en" ? "Enter description in English" : "أدخل الوصف باللغة الإنجليزية"
							}
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
					</div>
					<div>
						<TextInput
							label={locale === "en" ? "Description (Arabic)" : "الوصف (بالعربية)"}
							placeholder={
								locale === "en" ? "Enter description in Arabic" : "أدخل الوصف باللغة العربية"
							}
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
					</div>

					<div>
						<Select
							label={locale === "en" ? "tag" : "النوع"}
							option={[
								{ name: "DOMAIN", id: "DOMAIN" },
								{ name: "KNOWLEDGEAREA", id: "KNOWLEDGEAREA" },
								{ name: "PROCESSGROUP", id: "PROCESSGROUP" },
								{ name: "SENARIO", id: "SENARIO" },
								{ name: "OTHEHER", id: "OTHEHER" },
							]}
							id={"type"}
							name={"type"}
							// @ts-ignore
							value={formik.values.type}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<p>{formik.errors.type && formik.touched.type ? formik.errors.type : ""}</p>
					</div>
					<div>
						<Checkbox
							id={"isDeleted"}
							name={"isDeleted"}
							label={locale === "en" ? "Is Deleted" : "مفعل"}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>

					<Flexbox $justify={"end"}>
						<Button buttonType={"submit"} body={locale === "en" ? "Save" : "حفظ"} />
					</Flexbox>
				</AddressInputsContainer>
			</form>
		</>
	);
};

export default AddTag;
