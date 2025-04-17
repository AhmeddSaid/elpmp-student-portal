import React from "react";
import {
	AnswerComponentShell,
	QuestionInAnswer,
} from "@/Library/Common/AnswerComponent/AnswerComponent.styles";

const AnswerComponent = ({
	status,
	answer,
	question,
}: {
	status?: "correct" | "incorrect";
	answer: string;
	question?: string;
}) => {
	return (
		<AnswerComponentShell question={question} status={status} $direction={"column"} $gap={8}>
			<p>{answer}</p>
			{question && (
				<QuestionInAnswer status={status} $align={"center"} $gap={16}>
					<p>{question}</p>
					{status === "incorrect" && (
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M16.0003 29.3332C23.3641 29.3332 29.3337 23.3636 29.3337 15.9998C29.3337 8.63604 23.3641 2.6665 16.0003 2.6665C8.63653 2.6665 2.66699 8.63604 2.66699 15.9998C2.66699 23.3636 8.63653 29.3332 16.0003 29.3332ZM12.9431 11.057C12.4224 10.5363 11.5782 10.5363 11.0575 11.057C10.5368 11.5777 10.5368 12.4219 11.0575 12.9426L14.1147 15.9998L11.0575 19.057C10.5368 19.5777 10.5368 20.4219 11.0575 20.9426C11.5782 21.4633 12.4224 21.4633 12.9431 20.9426L16.0003 17.8855L19.0575 20.9426C19.5782 21.4633 20.4224 21.4633 20.9431 20.9426C21.4638 20.4219 21.4638 19.5777 20.9431 19.057L17.8859 15.9998L20.9431 12.9426C21.4638 12.4219 21.4638 11.5777 20.9431 11.057C20.4224 10.5363 19.5782 10.5363 19.0575 11.057L16.0003 14.1142L12.9431 11.057Z"
									fill="#C32518"
								/>
							</svg>
						</span>
					)}
					{status === "correct" && (
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M2.66699 15.9998C2.66699 8.63604 8.63653 2.6665 16.0003 2.6665C23.3641 2.6665 29.3337 8.63604 29.3337 15.9998C29.3337 23.3636 23.3641 29.3332 16.0003 29.3332C8.63653 29.3332 2.66699 23.3636 2.66699 15.9998ZM20.9431 14.276C21.4638 13.7553 21.4638 12.9111 20.9431 12.3904C20.4224 11.8697 19.5782 11.8697 19.0575 12.3904L14.667 16.7809L12.9431 15.057C12.4224 14.5363 11.5782 14.5363 11.0575 15.057C10.5368 15.5777 10.5368 16.4219 11.0575 16.9426L13.7242 19.6093C14.2449 20.13 15.0891 20.13 15.6098 19.6093L20.9431 14.276Z"
									fill="#00823E"
								/>
							</svg>
						</span>
					)}
				</QuestionInAnswer>
			)}
		</AnswerComponentShell>
	);
};

export default AnswerComponent;
