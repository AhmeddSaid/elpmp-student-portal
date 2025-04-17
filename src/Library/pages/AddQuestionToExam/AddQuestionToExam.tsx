"use client";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import Button from "@/Library/Common/Button/Button";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import Select from "@/Library/Common/Select/Select";
import { addQuestionToExam } from "@/app/[locale]/(admin)/admin/exams/assignQuestionToExam/action";

const AddQuestionToExam = ({
	questions,
	exams,
}: {
	questions?: { questionEn: string; id: string }[];
	exams?: { nameEn: string; id: string }[];
}) => {
	const initialValues = {
		examId: "",
		questionId: "",
	};

	async function HandleAddQuestionToExam(formValues: { examId: string; questionId: string }) {
		// const action = await addQuestionToExam(formValues);
		// if (action.status === 200) {
		// 	toast.success("Question added successfully");
		// } else {
		// 	toast.error("Something went wrong");
		// }
		try {
			const { failed } = await addQuestionToExam(formValues);
			if (!failed) {
				toast.success("✔ Question added to Exam successfully");
				// revalidatePath("/admin/exams");
				// redirect("/admin/exams");
			} else {
				toast.error("❌ Question added to Exam Failed");
			}
		} catch (error) {
			toast.error("❌ Question added to Exam Failed");
		}
	}

	const questionsData: { name: string; id: string }[] = [];
	questions?.map((item: { questionEn: string; id: string }) => {
		return questionsData.push({ name: item.questionEn, id: item.id });
	});

	const examsData: { name: string; id: string }[] = [];

	exams?.map((item: { nameEn: string; id: string }) => {
		return examsData.push({ name: `${item.nameEn}`, id: item.id });
	});

	const formik = useFormik({
		initialValues,
		onSubmit: HandleAddQuestionToExam,
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Row>
					<Col $md={6}>
						<Select
							option={questionsData}
							label={"QuestionId"}
							id={"QuestionId"}
							name={"questionId"}
							value={formik.values.questionId}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</Col>

					<Col $md={6}>
						<Select
							option={examsData}
							id={"examId"}
							label={"examId"}
							name={"examId"}
							value={formik.values.examId}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</Col>

					<Col>
						<Button body={"add"} bgcolor={"primary"} buttonType={"submit"} />
					</Col>
				</Row>
			</form>
		</>
	);
};
export default AddQuestionToExam;
