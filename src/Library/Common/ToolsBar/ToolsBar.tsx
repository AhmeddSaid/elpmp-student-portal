import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import CalculatorIcon from "@/Library/Common/Icongraphy/CalculatorIcon/CalculatorIcon";
import Flag from "@/Library/Common/Icongraphy/Flag/Flag";
import ListIcon from "@/Library/Common/Icongraphy/ListIcon/ListIcon";
import UnFlag from "@/Library/Common/Icongraphy/UnFlag/UnFlag";
import WhiteBoaredIcon from "@/Library/Common/Icongraphy/WhiteBoaredIcon/WhiteBoaredIcon";
import { ToolsBarContainer, ToolsBarShell } from "@/Library/Common/ToolsBar/ToolsBar.styles";

const ToolsBar = ({
	OpenAllQuestion,
	EndExamReport,
}: {
	OpenAllQuestion: boolean;
	EndExamReport: boolean;
}) => {
	const [flag, setFlag] = React.useState(false);

	return (
		<>
			<ToolsBarContainer>
				<ToolsBarShell as={"div"}>
					<Flexbox $justify={"space-between"}>
						{OpenAllQuestion ? (
							<>
								<p className={"AllExamTitle"}>Review all exam questions</p>

								<Flexbox $align={"center"} $gap={8}>
									<ListIcon />
									<Flexbox $align={"center"} $gap={4}>
										<p className={"numberOfQuestion"}>84/120 questions </p>

										<p className={"unSend"}>Unseen/Incomplete</p>
									</Flexbox>
								</Flexbox>
							</>
						) : (
							<>
								<Flexbox $gap={32}>
									{EndExamReport ? (
										<p className={"EndExamTitle"}>You’ve 7 incomplete questions</p>
									) : (
										<>
											{" "}
											<Flexbox $gap={8}>
												<CalculatorIcon />

												<p>Calculator</p>
											</Flexbox>
											<Flexbox $gap={8}>
												<WhiteBoaredIcon />
												<p>White board</p>
											</Flexbox>
										</>
									)}
								</Flexbox>

								{EndExamReport ? (
									<Flexbox $align={"center"} $gap={8}>
										<ListIcon />
										<Flexbox $align={"center"} $gap={4}>
											<p className={"numberOfQuestion"}>84/120 questions </p>

											<p className={"unSend"}>Unseen/Incomplete</p>
										</Flexbox>
									</Flexbox>
								) : (
									<>
										{flag ? (
											<Flexbox
												onClick={() => setFlag(prev => !prev)}
												className={"FlagToReview"}
												$gap={8}
											>
												<Flag />
												<p>Flag for review</p>
											</Flexbox>
										) : (
											<Flexbox
												onClick={() => setFlag(prev => !prev)}
												className={"FlagToReview"}
												$gap={8}
											>
												<UnFlag />
												<p>Un-flag question</p>
											</Flexbox>
										)}
									</>
								)}
							</>
						)}
					</Flexbox>
				</ToolsBarShell>
			</ToolsBarContainer>
		</>
	);
};

export default ToolsBar;
