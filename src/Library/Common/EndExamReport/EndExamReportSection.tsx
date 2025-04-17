import React, { useEffect } from "react";
import { EndExamReportShell } from "@/Library/Common/EndExamReport/EndExamReport.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import SuccessIcon from "@/Library/Common/Icongraphy/SuccussIcon/SuccessIcon";
import NewQuestion from "@/Library/Common/NewQuestion/NewQuestion";

const EndExamReportSection = ({ EndExamReport }: { EndExamReport: boolean }) => {
	const data = true;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<EndExamReportShell EndExamReport={EndExamReport}>
				{dataEndExam ? (
					<>
						<NewQuestion Flagged DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion Flagged DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion DangerTag />
						<NewQuestion DangerTag />
					</>
				) : (
					<>
						<Flexbox
							className={"noQuestionShell"}
							$direction={"column"}
							$justify={"center"}
							$align={"center"}
						>
							<SuccessIcon />
							<p className={"NoQuestionBody"}>You’ve answered all the questions</p>
						</Flexbox>
					</>
				)}
			</EndExamReportShell>
		</>
	);
};

export default EndExamReportSection;
