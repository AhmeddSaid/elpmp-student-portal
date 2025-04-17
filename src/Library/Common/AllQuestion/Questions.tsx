import React from "react";
import { QuestionContaner } from "@/Library/Common/AllQuestion/AllQuestion.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";

const Questions = ({
	question,
	dimmed = false,
	...rest
}: {
	question: string;
	dimmed?: boolean;
}) => {
	return (
		<>
			<Flexbox $gap={10} className={styles.paddingTop16} $justify={"space-between"} {...rest}>
				<QuestionContaner dimmed={dimmed}>
					<p>{question}</p>
				</QuestionContaner>
			</Flexbox>
		</>
	);
};

export default Questions;
