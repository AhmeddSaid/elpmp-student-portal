"use client";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Select from "@/Library/Common/Select/Select";
import {
	AddressHeadingContainer,
	AddressInputsContainer,
} from "@/Library/pages/UpdateAddress/UpdateAddress.styles";
import { AddStudentToExamAction } from "@/app/[locale]/(admin)/admin/addStudentToExam/action";

const AddStudentToExam = ({
	usersData,
	examsData,
}: {
	usersData: { id: string; email: string }[];
	examsData: { nameEn: string; id: string }[];
}) => {
	const initialValues = {
		userId: "",
		examId: "",
	};

	const users: { name: string; id: string }[] = [];
	usersData.forEach((item: { email: string; id: string }) => {
		users.push({ name: `${item.email}`, id: item.id });
	});

	const exams: { name: string; id: string }[] = [];
	examsData.forEach((item: { nameEn: string; id: string }) => {
		exams.push({ name: `${item.nameEn}`, id: item.id });
	});

	async function handleAddStudentToExam(formValues: { userId: string; examId: string }) {
		const { failed } = await AddStudentToExamAction(formValues);
		if (!failed) {
			toast.success("student added successfully");
		} else {
			toast.error("student  add Failed");
		}
	}

	const formik = useFormik({ initialValues, onSubmit: handleAddStudentToExam });

	return (
		<form onSubmit={formik.handleSubmit}>
			<AddressHeadingContainer>
				<PageHeader subTitle={"Add student to exam "} title={"Add student to exam"} />
			</AddressHeadingContainer>

			<AddressInputsContainer>
				<Row>
					<Col $md={6}>
						<Select
							option={users}
							label={"student ID"}
							id={"userId"}
							name={"userId"}
							value={formik.values.userId}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
						/>
					</Col>

					<Col $md={6}>
						<Select
							option={exams}
							id={"examId"}
							name={"examId"}
							value={formik.values.examId}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							label={"Exam ID"}
						/>
					</Col>
				</Row>

				<Flexbox $justify={"end"}>
					<Button buttonType={"submit"} body={"add"} />
				</Flexbox>
			</AddressInputsContainer>
		</form>
	);
};

export default AddStudentToExam;
