import React from "react";
import { ExplanationContainer, TipsStyles } from "@/Library/Common/Explanation/Explanation.styles";

const Explanation = ({ body }: { body?: string }) => {
	return (
		<>
			{body ? (
				<ExplanationContainer>
					<TipsStyles>Explanation</TipsStyles>

					<span>{body}</span>
				</ExplanationContainer>
			) : (
				<ExplanationContainer>
					<TipsStyles>No explanation for this question</TipsStyles>
				</ExplanationContainer>
			)}
		</>
	);
};

export default Explanation;
