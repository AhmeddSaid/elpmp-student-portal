import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import ClockIcon from "@/Library/Common/Icongraphy/ClockIcon/ClockIcon";
import ListIcon from "@/Library/Common/Icongraphy/ListIcon/ListIcon";
import ThreeDotsIcon from "@/Library/Common/Icongraphy/ThreeDotsIcon/ThreeDotsIcon";
import VerticalDottedDivider from "@/Library/Common/Icongraphy/VerticalDottedDivider/VerticalDottedDivider";
import {
	SimulationNavBarContainer,
	SimulationNavBarShell,
} from "@/Library/Common/SimulationNavBar/SimulationNavBar.styles";

const SimulationNavBar = ({
	EndExamReport,
	OpenAllQuestion,
	totalQuestion,
	currentQuestion,
	historyMode,
	examName,
}: {
	EndExamReport?: boolean;
	OpenAllQuestion?: boolean;
	totalQuestion?: number;
	currentQuestion?: number;
	historyMode?: boolean;
	examName: string;
}) => {
	return (
		<>
			<SimulationNavBarContainer>
				<SimulationNavBarShell as={"div"}>
					<Flexbox $align={"center"} $justify={"space-between"}>
						<p className={"NavBarTitle"}>{EndExamReport ? "End exam" : examName}</p>

						{EndExamReport ? <p className={"EndReportTitle"}> {examName} </p> : ""}

						<Flexbox $align={"center"}>
							{!OpenAllQuestion && !EndExamReport && (
								<>
									<Flexbox $gap={8}>
										<ListIcon />

										<p className={"numberOfQuestion"}>
											{currentQuestion}/{totalQuestion}
										</p>
									</Flexbox>
									<div className={"VerticalDottedDivider"}>
										<VerticalDottedDivider />
									</div>
								</>
							)}

							<Flexbox $gap={10}>
								<ClockIcon />
								<p className={"TimeRemaining"}> {historyMode ? "Time spent" : "Time remaining"} </p>
								<p className={"numberOfQuestion"}>106:14</p>
							</Flexbox>

							{!OpenAllQuestion && !EndExamReport && (
								<>
									<div className={"VerticalDottedDivider"}>
										<VerticalDottedDivider />
									</div>

									<ThreeDotsIcon />
								</>
							)}
						</Flexbox>
					</Flexbox>
				</SimulationNavBarShell>
			</SimulationNavBarContainer>
		</>
	);
};

export default SimulationNavBar;
