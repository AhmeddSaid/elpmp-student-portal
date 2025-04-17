import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { NewAllQuestionShell } from "@/Library/Common/NewAllQuestion/NewAllQuestion.styles";
import NewQuestion from "@/Library/Common/NewQuestion/NewQuestion";
import SimulatorNavigationBar from "@/Library/Common/SimulatorNavigationBar/SimulatorNavigationBar";

const NewAllQuestion = ({
	OpenAllQuestion,
	setOpenAllQuestion,
	openExplenation,
	setOpenExplenation,
}: {
	OpenAllQuestion: boolean;
	setOpenAllQuestion: Dispatch<SetStateAction<boolean>>;
	openExplenation: boolean;
	setOpenExplenation: Dispatch<SetStateAction<boolean>>;
}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NewAllQuestionShell OpenAllQuestion={OpenAllQuestion}>
				<NewQuestion Flagged viewAnswer />
				<NewQuestion />
				<NewQuestion viewAnswer />
				<NewQuestion Flagged />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion Flagged viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />
				<NewQuestion viewAnswer />

				<SimulatorNavigationBar
					setOpenExplenation={setOpenExplenation}
					openExplenation={openExplenation}
					setOpenAllQuestion={setOpenAllQuestion}
				/>
			</NewAllQuestionShell>
		</>
	);
};

export default NewAllQuestion;
