import React, { Dispatch, SetStateAction } from "react";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import BlackLeftIcon from "@/Library/Common/Icongraphy/BlackLeftIcon/BlackLeftIcon";
import Eye from "@/Library/Common/Icongraphy/Eye/Eye";
import Leading from "@/Library/Common/Icongraphy/Leading/Leading";
import VerticalDottedDivider from "@/Library/Common/Icongraphy/VerticalDottedDivider/VerticalDottedDivider";
import WhiteRightIcon from "@/Library/Common/Icongraphy/WhiteRightIcon/WhiteRightIcon";
import { SimulationFooterShell } from "@/Library/Common/SimulationFooter/SimulationFooter.styles";

const SimulationFooter = ({
	setOpenExplenation,
	openExplenation,
	setEndExamReport,
	EndExamReport,
	setOpenAllQuestion,
	dataEndExam,
}: {
	setOpenExplenation: Dispatch<SetStateAction<boolean>>;
	openExplenation: boolean;
	setEndExamReport: Dispatch<SetStateAction<boolean>>;
	EndExamReport: boolean;
	setOpenAllQuestion: Dispatch<SetStateAction<boolean>>;
	dataEndExam: boolean;
}) => {
	const handleToggleExplanation = () => {
		setOpenExplenation(!openExplenation);
	};

	const HandleOpenAllQuestions = () => {
		if (!openExplenation) {
			setOpenExplenation(true);
			setOpenAllQuestion(true);
		} else {
			setOpenAllQuestion(true);
		}
	};

	const HandleEndExam = () => {
		if (!openExplenation) {
			setOpenExplenation(true);
			setEndExamReport(true);
		} else {
			setEndExamReport(true);
		}
	};

	return (
		<>
			<SimulationFooterShell openExplenation={openExplenation}>
				{EndExamReport ? (
					<>
						<Flexbox $gap={8}>
							<Button
								bgcolor={dataEndExam ? "primary" : "gost"}
								onclick={() => setEndExamReport(false)}
								body={"Cancel, and get back"}
							/>
							<Button bgcolor={dataEndExam ? "gost" : "primary"} body={"End exam now"} />
						</Flexbox>
					</>
				) : (
					<Flexbox $justify={"space-between"}>
						<Flexbox $gap={8} onClick={handleToggleExplanation} className={"viewExplanationButton"}>
							<Eye />
							<p className={"viewBody"}>
								{!openExplenation ? "Hide Explanation" : "Show Explanation"}
							</p>
						</Flexbox>

						<Flexbox $align={"center"}>
							<div>
								<button onClick={HandleEndExam}>End Exam</button>

								<Button
									onclick={HandleOpenAllQuestions}
									icon={<Leading />}
									bgcolor={"gost"}
									body={"Navigator"}
								/>
							</div>

							<div className={"divider"}>
								<VerticalDottedDivider />
							</div>

							<Flexbox $gap={16}>
								<Button icon={<BlackLeftIcon />} bgcolor={"secondary"} body={"Previous"} />
								<Button SecondIcon={<WhiteRightIcon />} bgcolor={"primary"} body={"Next"} />
							</Flexbox>
						</Flexbox>
					</Flexbox>
				)}
			</SimulationFooterShell>
		</>
	);
};

export default SimulationFooter;
