"use client";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import Button from "@/Library/Common/Button/Button";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import Select from "@/Library/Common/Select/Select";
import { addTagsToQuestions } from "@/app/[locale]/(admin)/admin/exams/tag/addTagToQuestion/action";

interface AddTagToQuestionType {
	questionTagId: string;
	questionsId: string;
}

const AddTagToQuestion = ({
	questions,
	tags,
}: {
	questions: { questionEn: string; id: string }[];
	tags: { nameEn: string; id: string }[];
}) => {
	const initialValues: AddTagToQuestionType = {
		questionTagId: "",
		questionsId: "",
	};

	const tagsData: { name: string; id: string }[] = [];

	tags.map((item: { nameEn: string; id: string }) => {
		return tagsData.push({ name: `${item.nameEn}`, id: item.id });
	});

	const questionData: { name: string; id: string }[] = [];

	questions.map((item: { questionEn: string; id: string }) => {
		return questionData.push({ name: `${item.questionEn}`, id: item.id });
	});

	async function HandleAddTagToQuestion(formValues: AddTagToQuestionType) {
		// const action = await addTagsToQuestions(formValues);
		// if (action.status === 200) {
		// 	toast.success("Tag added successfully");
		// } else {
		// 	toast.error("Tag add Failed");
		// }
		try {
			const { failed } = await addTagsToQuestions(formValues);
			if (!failed) {
				toast.success("✔ Tag added to Question successfully");
				// revalidatePath("/admin/exams");
				// redirect("/admin/exams");
			} else {
				toast.error("❌Tag added to Question Failed");
			}
		} catch (error) {
			toast.error("❌ Tag added to Question Failed");
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit: HandleAddTagToQuestion,
	});

	return (
		<>
			{tags.length <= 0 && (
				<>
					<p>Not tags Found Please add tags</p>
					<Link href={"/admin/exams/question/add"}>
						<Button body={"Add question"} size={"small"} />
					</Link>
				</>
			)}

			{questions.length <= 0 && (
				<>
					<p>Not questions Found Please add questions</p>
					<Link href={"/admin/exams/question/add"}>
						<Button body={"Add question"} size={"small"} />
					</Link>
				</>
			)}

			{tags.length > 0 && questions.length > 0 && (
				<form onSubmit={formik.handleSubmit}>
					<Row>
						<Col $md={6}>
							<Select
								option={tagsData}
								id={"questionTagId"}
								label={"Choose a tag"}
								name={"questionTagId"}
								value={formik.values.questionTagId}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</Col>
						<Col $md={6}>
							<Select
								option={questionData}
								id={"questionsId"}
								name={"questionsId"}
								label={"question"}
								value={formik.values.questionsId}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</Col>

						<Button body={"save"} buttonType={"submit"} />
					</Row>
				</form>
			)}
		</>
	);
};

export default AddTagToQuestion;
