import React from "react";
import styles from "./../../../Library/Common/Grids/Spaces.module.css";
import { ExamQuestionShell } from "@/Library/Common/ExamQuestion/ExamQuestion.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import Icon from "@/Library/Common/Icongraphy/Icon/Icon";

const ExamQuestion = ({
	question,
	isAnswered = false,
	QAarray,
	NumOdCorrectAnswers,
}: {
	question: string;
	isAnswered?: boolean;
	QAarray?: any;
	NumOdCorrectAnswers: number;
}) => {
	return (
		<>
			<ExamQuestionShell className={styles.marginBottom32}>
				<p className={"ExamQuestionBody"}>{question}</p>

				<Flexbox className={styles.marginTop14} $align={"center"} $justify={"space-between"}>
					<Flexbox $align={"center"} $gap={8}>
						<Icon />
						<p className={"Choose"}>Choose {NumOdCorrectAnswers} answers</p>
					</Flexbox>
					{QAarray?.userAnswers?.length === 0 && <div className={"tag"}>Skipped</div>}

					{/*{QAarray?.flagged && (*/}
					{/*	<Tags tagtittle={"Flagged"} bgcolor={"primary"} size="xsmall" fcolor={"primary"} />*/}
					{/*)}*/}

					{QAarray?.userAnswers?.length > 0 && QAarray.correct && (
						<div className={"SuccessTag"}>Success</div>
					)}

					{QAarray?.userAnswers?.length > 0 && !QAarray.correct && (
						<div className={"WrongTag"}>Wrong</div>
					)}
				</Flexbox>
			</ExamQuestionShell>
		</>
	);
};

export default ExamQuestion;
