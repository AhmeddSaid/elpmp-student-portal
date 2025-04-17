"use client";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import Button from "@/Library/Common/Button/Button";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import TextInput from "@/Library/Common/TextInput/TextInput";
import { addDiscussion } from "@/app/[locale]/(exams)/exam/[examName]/[subExamName]/addDiscussion/action";

const AddDiscussionSubExam = ({ SubExamId }: { SubExamId: string }) => {
	const validationSchema = yup.object({
		comment: yup.string().required("Please enter comment"),
	});
	const initialValues = {
		comment: "",
	};

	async function handleAddDiscussion(formValues: { comment: string }) {
		const action = await addDiscussion(formValues, SubExamId);

		if (action.status === 200) {
			toast.success("discussion added successfully");
		} else {
			toast.error("discussion add Failed");
		}
	}

	const formik = useFormik({ initialValues, validationSchema, onSubmit: handleAddDiscussion });

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Row>
					<Col $md={8}>
						<TextInput
							name={"comment"}
							label={"add comment"}
							id={"comment"}
							type={"text"}
							placeholder={"add comment"}
							value={formik.values.comment}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							errorMessage={
								formik.errors.comment && formik.touched.comment ? `${formik.errors.comment}` : ""
							}
						/>
					</Col>

					<Col $md={6}>
						<Button body={"ADD"} buttonType={"submit"} />
					</Col>
				</Row>
			</form>
		</>
	);
};

export default AddDiscussionSubExam;
