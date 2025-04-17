import React from "react";
import { LabelLarge } from "@/Library/Common/Typograhy/Typography";
import {
	CheckboxInput,
	CheckboxLabel,
	TransactionCardShell,
} from "@/Library/pages/Instructions/ExamModeCard/ExamModeCard.styles";

const ExamModeCard = ({
	id,
	header,
	name,
	value,
}: {
	id: string;
	header: string;
	name: string;
	value: string;
}) => {
	return (
		<>
			<CheckboxLabel htmlFor={id}>
				<CheckboxInput id={id} type={"radio"} name={name} value={value} />

				<svg
					id={"checked"}
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
						fill="#4A2BE9"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.6574 7.25896L8.79893 14.12L5.5 10.8199L6.7585 9.56089L8.79893 11.6021L14.3989 6L15.6574 7.25896Z"
						fill="white"
					/>
				</svg>
				<TransactionCardShell id={"transactionCardShell"}>
					<LabelLarge color={"var(--Text-text-primary, #000)"}>{header}</LabelLarge>
					{/*<TransactionCardHeading className={"transactionCardHeading"}>*/}
					{/*	{header}*/}
					{/*</TransactionCardHeading>*/}
				</TransactionCardShell>
			</CheckboxLabel>
		</>
	);
};

export default ExamModeCard;
