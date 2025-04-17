"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import * as yup from "yup";
import { RatingShell } from "../../../../testRating/Rating.Styles";
import { Foo } from "../../../../testRating/testRating";
import styles from "./../../Common/Grids/Spaces.module.css";
import Button from "@/Library/Common/Button/Button";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import TextInput from "@/Library/Common/TextInput/TextInput";
import { ExamReviewAction } from "@/app/[locale]/(exams)/exam/[examName]/[subExamName]/review/action";
import { closePopUp } from "@/lib/OpenAndClosePopUp";

const SubExamReview = ({ subExamID }: { subExamID: string }) => {
	const validationSchema = yup
		.object({
			// subExam: yup
			// 	.string()
			// 	.required({ en: "Please enter sub exam", ar: "الرجاء تحديد مرحلة الامتحان" }),
			rating: yup
				.number()
				.positive()
				.integer()
				.min(1)
				.max(5)
				.required({ en: "Please enter rating", ar: "الرجاء تحديد التقييم" }),

			comment: yup
				.string()
				.notRequired()
				.min(3, "Minimum 3 characters")
				.max(256, "Maximum 256 characters"),
			title: yup
				.string()
				.notRequired()
				.min(3, "Minimum 3 characters")
				.max(60, "Maximum 60 characters"),
			isDeleted: yup.boolean().default(false).notRequired(),
		})
		.noUnknown(true, { noExtensions: true, message: "Unknown field" })
		.strict(true);

	const initialValues = {
		rating: 1,
		comment: "",
		title: "",
	};
	const [rating, setRating] = useState<number>(0);
	const dispatch = useDispatch();

	async function handleReview(formValues: { rating: number; comment: string; title: string }) {
		const updateValues = { ...formValues, subExam: subExamID, rating };
		const action = await ExamReviewAction(updateValues);

		if (action.status === 200) {
			toast.success("review added successfully");
			dispatch(closePopUp());
		} else {
			toast.error("review  add Failed");
		}
	}

	const formik = useFormik({ initialValues, onSubmit: handleReview, validationSchema });

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Row $justify={"start"}>
					<Col $md={6}>
						<RatingShell className={styles.marginTop32}>
							<Foo rating={rating} setRating={setRating} />
						</RatingShell>
					</Col>

					<Col $md={12} className={styles.marginTop32}>
						<TextInput
							label={"Write your title"}
							placeholder={"review"}
							type={"text"}
							id={"title"}
							name={"title"}
							value={formik.values.title}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							errorMessage={
								formik.errors.title && formik.touched.title ? `${formik.errors.title}` : ""
							}
						/>
					</Col>

					<Col $md={12} className={styles.marginTop32}>
						<TextInput
							label={"Write your Body"}
							placeholder={"review"}
							type={"text"}
							id={"comment"}
							name={"comment"}
							value={formik.values.comment}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							errorMessage={
								formik.errors.comment && formik.touched.comment ? `${formik.errors.comment}` : ""
							}
						/>
					</Col>

					<Col $md={6}>
						<div className={styles.paddingTop32}>
							<Button buttonType={"submit"} body={"add"} />
						</div>
					</Col>
				</Row>
			</form>
		</>
	);
};

export default SubExamReview;
