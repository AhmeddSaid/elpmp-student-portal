"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "sonner";
import * as yup from "yup";
import { ValidationError } from "yup";

import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Flexbox, Row } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Radio from "@/Library/Common/Radio/Radio";
import Select from "@/Library/Common/Select/Select";
import TextInput from "@/Library/Common/TextInput/TextInput";
import {
	AddressHeading,
	AddressHeadingContainer,
	AddressInputsContainer,
	AddressSubHeading,
	AnswerCheckBox,
	QuestionDiv,
	RemoveButton,
} from "@/Library/pages/Address/Address.styles";
import { addQuestionAction } from "@/app/[locale]/(admin)/admin/exams/question/add/action";

interface AnswersType {
	answerEn: string;
	answerAr: string;
	isCorrect: boolean;
}

export interface AddExamType {
	questionEn: string;
	questionAr: string;
	isDeleted: boolean;
	type: "SINGLE" | "MULTIBLECHOISE" | "MATCH";
	correctAnswersCount: number;
	answers: AnswersType[];
}

const AddQuestion = ({ locale }: Locale) => {
	const [fields, setFields] = useState<AnswersType[]>([
		{ answerEn: "", answerAr: "", isCorrect: false },
	]);

	const validationSchema = yup
		.object()
		.shape({
			questionEn: yup
				.string()
				.trim(
					locale === "en"
						? "Question must not contain leading or trailing spaces"
						: "يجب ألا يحتوي السؤال على مسافات بادئة أو لاحقة",
				)
				.min(3, locale === "en" ? "Min 3 characters" : "يجب أن لا يقل السؤال عن 3 أحرف")
				.max(1024, locale === "en" ? "Max 1024 characters" : "يجب أن لا يزيد السؤال عن 1024 حرف")
				.required(locale === "en" ? "Question is required" : "السؤال مطلوب"),

			questionAr: yup
				.string()
				.trim(
					locale === "en"
						? "Question must not contain leading or trailing spaces"
						: "يجب ألا يحتوي السؤال على مسافات بادئة أو لاحقة",
				)
				.min(3, locale === "en" ? "Min 3 characters" : "يجب أن لا يقل السؤال عن 3 أحرف")
				.required(locale === "en" ? "Question is required" : "السؤال مطلوب"),

			isDeleted: yup.boolean().default(false).optional(),
		})
		.noUnknown(true);

	const initialValues: AddExamType = {
		questionEn: "",
		questionAr: "",
		correctAnswersCount: 2,
		isDeleted: false,
		type: "SINGLE",
		answers: [],
	};

	const answersvalidationSchema = yup.object().shape({
		answerEn: yup
			.string()
			.trim(
				locale === "en"
					? "Answer must not contain leading or trailing spaces"
					: "يجب ألا يحتوي الجواب على مسافات بادئة أو لاحقة",
			)
			.min(3, locale === "en" ? "Min 3 characters" : "يجب أن لا يقل الجواب عن 3 أحرف")
			.max(1024, locale === "en" ? "Max 1024 characters" : "يجب أن لا يزيد الجواب عن 1024 حرف")
			.required(locale === "en" ? "Answer is required" : "الجواب مطلوب"),
		answerAr: yup
			.string()
			.trim(
				locale === "en"
					? "Answer must not contain leading or trailing spaces"
					: "يجب ألا يحتوي الجواب على مسافات بادئة أو لاحقة",
			)
			.min(3, locale === "en" ? "Min 3 characters" : "يجب أن لا يقل الجواب عن 3 أحرف")
			.max(1024, locale === "en" ? "Max 1024 characters" : "يجب أن لا يزيد الجواب عن 1024 حرف")
			.required(locale === "en" ? "Answer is required" : "الجواب مطلوب"),
		isCorrect: yup.boolean().default(false).optional(),
	});

	const [errors, setErrors] = useState<string[]>([]);

	async function handelQuestion(formValues: AddExamType) {
		const validate = yup.array().of(answersvalidationSchema);
		setErrors([]);

		try {
			await validate.validate(fields, { abortEarly: false });
		} catch (err: unknown) {
			if (err instanceof ValidationError) {
				if (err.inner && Array.isArray(err.inner) && err.inner.length > 0) {
					err.inner.forEach(error => {
						setErrors(prevState => [...prevState, `Error in ${error.path}: ${error.message}`]);
					});
				}
				return;
			}
			return;
		}

		formValues.answers = fields;

		// const action = await addQuestionAction(formValues);

		try {
			const { failed } = await addQuestionAction(formValues);
			if (!failed) {
				toast.success("✔ Question added successfully");
				// revalidatePath("/admin/exams");
				// redirect("/admin/exams");
			} else {
				toast.error("❌ Question add Failed");
			}
		} catch (error) {
			toast.error("❌ Question add Failed");
		}

		// if (action.status === 200) {
		// 	toast.success("Question added successfully");
		// } else {
		// 	toast.error("Something went wrong");
		// }
	}

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handelQuestion,
	});

	function handleAdd() {
		const values = [...fields];
		values.push({ answerEn: "", answerAr: "", isCorrect: false });
		setFields(values);
	}

	function handleChange(i: number, event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		const values = [...fields];

		// @ts-ignore
		values[i][name] = value;
		setFields(values);
	}

	function handleRemove(i: number) {
		const values = [...fields];
		values.splice(i, 1);
		setFields(values);
	}

	function handleCheckboxChange(i: number, event: React.ChangeEvent<HTMLInputElement>) {
		const { checked } = event.target;
		const values = [...fields];
		values[i].isCorrect = checked;
		setFields(values);
	}

	function handleRadioChange(i: number) {
		const values = [...fields];
		values.forEach((_, index) => {
			values[index].isCorrect = false;
		});

		values[i].isCorrect = true;

		setFields(values);
	}

	return (
		<>
			<AddressHeadingContainer>
				<AddressHeading>{locale === "en" ? "Add Question" : "إضافة سؤال"}</AddressHeading>
				<AddressSubHeading>
					{locale === "en"
						? "Manage and update your  account info"
						: "إدارة وتحديث معلومات حسابك في "}
				</AddressSubHeading>
			</AddressHeadingContainer>
			<form onSubmit={formik.handleSubmit}>
				<AddressInputsContainer>
					<Row>
						<QuestionDiv>
							<TextInput
								label={locale === "en" ? "Question in English" : "السؤال بالإنجليزية"}
								placeholder={
									locale === "en" ? "Enter question in English" : "أدخل السؤال بالإنجليزية"
								}
								type={"text"}
								id={"questionEn"}
								name={"questionEn"}
								value={formik.values.questionEn}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.questionEn && formik.touched.questionEn
										? formik.errors.questionEn
										: ""
								}
							/>
						</QuestionDiv>

						<QuestionDiv>
							<TextInput
								label={locale === "en" ? "Question in Arabic" : "السؤال بالعربية"}
								placeholder={locale === "en" ? "Enter question in Arabic" : "أدخل السؤال بالعربية"}
								type={"text"}
								id={"questionAr"}
								name={"questionAr"}
								value={formik.values.questionAr}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={
									formik.errors.questionAr && formik.touched.questionAr
										? formik.errors.questionAr
										: ""
								}
							/>
						</QuestionDiv>
					</Row>

					<Flexbox $gap={10}>
						<div>
							<Select
								label={locale === "en" ? "Type" : "النوع"}
								option={[
									{ name: "SINGLE", id: "SINGLE" },
									{ name: "MULTI", id: " MULTIBLECHOISE" },
									{ name: "MATCH", id: "MATCH" },
								]}
								id={"type"}
								name={"type"}
								value={formik.values.type}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
					</Flexbox>
					<Checkbox
						label={locale === "en" ? "Is Deleted" : "تم النشر"}
						id={"isDeleted"}
						name={"isDeleted"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					<Row>
						{fields.map((field, index) => {
							// @ts-ignore
							return (
								<div key={`${index}`}>
									<Flexbox className={styles.marginBottom16} $gap={10}>
										<div>
											<TextInput
												id={`answerEn${index}`}
												name={"answerEn"}
												value={field.answerEn}
												label={"add answer in en"}
												placeholder={"placeholder"}
												type={"text"}
												onChange={event => handleChange(index, event)}
											/>
										</div>
										<div>
											<TextInput
												id={`answerAr${index}`}
												name={"answerAr"}
												value={field.answerAr}
												label={"add answer in ar"}
												placeholder={"placeholder"}
												type={"text"}
												onChange={event => handleChange(index, event)}
											/>
										</div>

										{fields.length !== 1 && (
											<RemoveButton type={"button"} onClick={() => handleRemove(index)}>
												<Button
													body={"Remove"}
													buttonType={"button"}
													bgcolor={"danger"}
													size={"xsmall"}
												/>
											</RemoveButton>
										)}

										{formik.values.type === "MULTIBLECHOISE" && (
											<AnswerCheckBox>
												<Checkbox
													id={`isCorrect${index}`}
													onChange={event => handleCheckboxChange(index, event)}
													checked={fields[index].isCorrect}
													name="isCorrect"
													label="Is Correct answer"
												/>
											</AnswerCheckBox>
										)}

										{formik.values.type === "SINGLE" && (
											<AnswerCheckBox>
												<Radio
													onClick={() => handleRadioChange(index)}
													id={index.toString()}
													checked={fields[index].isCorrect}
													name="isCorrect"
													label="Is correct"
													// @ts-ignore
													value={fields[index].isCorrect}
												/>
											</AnswerCheckBox>
										)}
									</Flexbox>

									{fields.length - 1 === index && (
										<Button
											body={"+ Add new answer"}
											buttonType={"button"}
											bgcolor={"secondary"}
											onclick={handleAdd}
										/>
									)}
								</div>
							);
						})}
					</Row>

					{errors.map((error, index) => {
						return (
							<p style={{ color: "var(--danger)" }} key={index}>
								{error}
							</p>
						);
					})}

					<Flexbox $justify={"end"}>
						<Button buttonType={"submit"} body={locale === "en" ? "Save" : "حفظ"} />
					</Flexbox>
				</AddressInputsContainer>
			</form>
		</>
	);
};

export default AddQuestion;
