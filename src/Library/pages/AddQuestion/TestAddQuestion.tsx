// "use client";
// import { useFormik } from "formik";
// import React, { useState } from "react";
// import { addQuestionAction } from "@/app/[locale]/(admin)/admin/exams/question/add/action";
//
// const TestAddQuestion = () => {
// 	async function handleQuestion(formValues) {
// 		// console.log(formValues);
// 		console.log(fields);
// 		const action = await addQuestionAction(formValues);
// 	}
//
// 	const initialValues = {
// 		questionEn: "",
// 		questionAr: "",
// 		correctAnswersCount: "",
// 		isDeleted: false,
// 		type: "",
//
// 		// answers:
// 	};
//
// 	const formik = useFormik({
// 		initialValues,
// 		// validationSchema,
// 		onSubmit: handleQuestion,
// 	});
//
// 	const [fields, setFields] = useState([{ answerEn: "", answerAr: "", isCorrect: "" }]);
//
// 	function handleAdd() {
// 		const values = [...fields];
// 		values.push({ answerEn: "", answerAr: "", isCorrect: "" });
// 		setFields(values);
// 	}
//
// 	function handleChange(i, event) {
// 		const { name, value } = event.target;
// 		const values = [...fields];
// 		values[i][name] = value;
// 		setFields(values);
// 	}
//
// 	function handleRemove(i) {
// 		const values = [...fields];
// 		values.splice(i, 1);
// 		setFields(values);
// 		console.log(i);
// 	}
//
// 	return (
// 		<form onSubmit={formik.handleSubmit}>
// 			{fields.map((field, index) => (
// 				<div key={index}>
// 					<input
// 						name="answerEn"
// 						value={field.answerEn}
// 						onChange={event => handleChange(index, event)}
// 						placeholder="Answer (English)"
// 					/>
// 					<input
// 						name="answerAr"
// 						value={field.answerAr}
// 						onChange={event => handleChange(index, event)}
// 						placeholder="Answer (Arabic)"
// 					/>
// 					<input
// 						name="isCorrect"
// 						value={field.isCorrect}
// 						onChange={event => handleChange(index, event)}
// 						placeholder="Is Correct"
// 					/>
// 					{fields.length !== 1 && (
// 						<button type="button" onClick={() => handleRemove(index)}>
// 							Remove
// 						</button>
// 					)}
// 					{fields.length - 1 === index && (
// 						<button type="button" onClick={handleAdd}>
// 							Add
// 						</button>
// 					)}
// 				</div>
// 			))}
// 			<button type="submit">Submit</button>
// 		</form>
// 	);
// };
//
// export default TestAddQuestion;
