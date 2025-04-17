import React from "react";
import {
	ExplanationBody,
	NewExplanationShell,
} from "@/Library/Common/NewExplanation/NewExplanation.styles";

const NewExplanation = ({ openExplenation, body }: { openExplenation: boolean; body: string }) => {
	return (
		<>
			<NewExplanationShell openExplenation={openExplenation}>
				<p>Explanation</p>

				<ExplanationBody>{body}</ExplanationBody>
			</NewExplanationShell>
		</>
	);
};

export default NewExplanation;
