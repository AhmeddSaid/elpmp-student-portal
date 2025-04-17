"use client";
import React from "react";

const UpdateTag = () => {
	// const { id, nameEn, nameAr, descriptionEn, descriptionAr, isDeleted } = data.data;
	// const validationSchema = yup
	// 	.object()
	// 	.shape({
	// 		nameEn: yup
	// 			.string()
	// 			.trim("Tag's name must not contain leading or trailing spaces")
	// 			.min(3, "Min 3 characters")
	// 			.max(1024, "max 1024 characters")
	// 			.matches(
	// 				/^[a-zA-Z\s]+$/,
	// 				locale
	// 					? "Tag's name must contain only English letters"
	// 					: "اسم العلامة يجب أن يحتوي على أحرف انجليزية فقط",
	// 			)
	// 			.notRequired(),
	// 		nameAr: yup
	// 			.string()
	// 			.trim("يجب ألا يحتوي اسم العلامة على مسافات بادئة أو لاحقة")
	// 			.min(3)
	// 			.matches(
	// 				/^[\u0600-\u06FF\s]+$/,
	// 				locale
	// 					? "Tag's name must contain only Arabic letters"
	// 					: "اسم العلامة يجب أن يحتوي على أحرف عربية فقط",
	// 			)
	// 			.notRequired(),
	// 		descriptionEn: yup
	// 			.string()
	// 			.trim("Description must not contain leading or trailing spaces")
	// 			.min(3, "Min 3 characters")
	// 			.max(1024, "max 1024 characters")
	// 			.matches(
	// 				/^[a-zA-Z\s]+$/,
	// 				locale
	// 					? "Description must contain only English letters"
	// 					: "الوصف يجب أن يحتوي على أحرف انجليزية فقط",
	// 			)
	// 			.notRequired(),
	// 		descriptionAr: yup
	// 			.string()
	// 			.trim("يجب ألا يحتوي الوصف على مسافات بادئة أو لاحقة")
	// 			.min(3)
	// 			.matches(
	// 				/^[\u0600-\u06FF\s]+$/,
	// 				locale
	// 					? "Description must contain only Arabic letters"
	// 					: "الوصف يجب أن يحتوي على أحرف عربية فقط",
	// 			)
	// 			.notRequired(),
	// 		isDeleted: yup.boolean().default(false).notRequired(),
	// 	})
	// 	.noUnknown(true, { noExtensions: true, message: "Unknown field" })
	// 	.strict(true);
	// const initialValues: {
	// 	nameEn: string;
	// 	nameAr: string;
	// 	descriptionEn: string;
	// 	descriptionAr: string;
	// 	isDeleted: boolean;
	// } = {
	// 	nameEn,
	// 	nameAr,
	// 	descriptionEn,
	// 	descriptionAr,
	// 	isDeleted,
	// };
	//
	// async function handleUpdateTag(formValues: {
	// 	nameEn: string;
	// 	nameAr: string;
	// 	describtionEn: string;
	// 	describtionAr: string;
	// 	isDeleted: boolean;
	// }) {
	// 	const action = await updateTagAction(formValues, id);
	// 	if (action.status.message === "Done") {
	// 		toast("✔ Tag updated successfully");
	// 	} else {
	// 		toast("❌ Tag updated Failed");
	// 	}
	// }
	//
	// const formik = useFormik({
	// 	initialValues,
	// 	validationSchema,
	// 	onSubmit: handleUpdateTag,
	// });
	return (
		<>
			{/*<AddressHeadingContainer>*/}
			{/*	<AddressHeading>update tag</AddressHeading>*/}
			{/*	<AddressSubHeading>Manage and update your Uxcel account info</AddressSubHeading>*/}
			{/*</AddressHeadingContainer>*/}
			{/*<form onSubmit={formik.handleSubmit}>*/}
			{/*	<AddressInputsContainer>*/}
			{/*		<div>*/}
			{/*			<TextInput*/}
			{/*				label={"tag name in en"}*/}
			{/*				placeholder={"placeholder"}*/}
			{/*				type={"text"}*/}
			{/*				id={"nameEn"}*/}
			{/*				name={"nameEn"}*/}
			{/*				value={formik.values.nameEn}*/}
			{/*				onChange={formik.handleChange}*/}
			{/*				onBlur={formik.handleBlur}*/}
			{/*				errorMessage={*/}
			{/*					formik.errors.nameEn && formik.touched.nameEn ? `${formik.errors.nameEn}` : ""*/}
			{/*				}*/}
			{/*			/>*/}
			{/*		</div>*/}
			{/*		<div>*/}
			{/*			<TextInput*/}
			{/*				label={"tag name in ar"}*/}
			{/*				placeholder={"placeholder"}*/}
			{/*				type={"text"}*/}
			{/*				id={"nameAr"}*/}
			{/*				name={"nameAr"}*/}
			{/*				value={formik.values.nameAr}*/}
			{/*				onChange={formik.handleChange}*/}
			{/*				onBlur={formik.handleBlur}*/}
			{/*				errorMessage={*/}
			{/*					formik.errors.nameAr && formik.touched.nameAr ? `${formik.errors.nameAr}` : ""*/}
			{/*				}*/}
			{/*			/>*/}
			{/*		</div>*/}
			{/*		<div>*/}
			{/*			<TextInput*/}
			{/*				label={"description in en"}*/}
			{/*				placeholder={"placeholder"}*/}
			{/*				type={"text"}*/}
			{/*				id={"descriptionEn"}*/}
			{/*				name={"descriptionEn"}*/}
			{/*				value={formik.values.descriptionEn}*/}
			{/*				onChange={formik.handleChange}*/}
			{/*				onBlur={formik.handleBlur}*/}
			{/*				errorMessage={*/}
			{/*					formik.errors.descriptionEn && formik.touched.descriptionEn*/}
			{/*						? `${formik.errors.descriptionEn}`*/}
			{/*						: ""*/}
			{/*				}*/}
			{/*			/>*/}
			{/*		</div>*/}
			{/*		<div>*/}
			{/*			<TextInput*/}
			{/*				label={"description in ar"}*/}
			{/*				placeholder={"placeholder"}*/}
			{/*				type={"text"}*/}
			{/*				id={"descriptionAr"}*/}
			{/*				name={"descriptionAr"}*/}
			{/*				value={formik.values.descriptionAr}*/}
			{/*				onChange={formik.handleChange}*/}
			{/*				onBlur={formik.handleBlur}*/}
			{/*				errorMessage={*/}
			{/*					formik.errors.descriptionAr && formik.touched.descriptionAr*/}
			{/*						? `${formik.errors.descriptionAr}`*/}
			{/*						: ""*/}
			{/*				}*/}
			{/*			/>*/}
			{/*		</div>*/}

			{/*		<div>*/}
			{/*			<Checkbox*/}
			{/*				id={"isDeleted"}*/}
			{/*				name={"isDeleted"}*/}
			{/*				label={"is published"}*/}
			{/*				onChange={formik.handleChange}*/}
			{/*				onBlur={formik.handleBlur}*/}
			{/*			/>*/}
			{/*		</div>*/}

			{/*		<Flexbox justify={"end"}>*/}
			{/*			<Button buttonType={"submit"} body={"Update"} />*/}
			{/*		</Flexbox>*/}
			{/*	</AddressInputsContainer>*/}
			{/*</form>*/}
		</>
	);
};

export default UpdateTag;
