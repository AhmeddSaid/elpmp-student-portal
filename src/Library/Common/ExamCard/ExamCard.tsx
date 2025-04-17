import Image from "next/image";
import React from "react";
import ActiveTag from "@/Library/Common/ExamCard/ActiveTag";
import {
	ExamCardCaption,
	ExamCardDescription,
	ExamCardFooter,
	ExamCardFooter2,
	ExamCardShell,
	ExamCardTitle,
} from "@/Library/Common/ExamCard/ExamCard.styles";
import ExamCardTag from "@/Library/Common/ExamCard/ExamCardTag";
import { Flexbox, Row } from "@/Library/Common/Grids/Grids";
import DateFormatter from "@/Utils/DateFormatter";

const ExamCard = ({
	cardImg,
	title,
	type,
	description,
	level,
	question,
	purchase = true,
	HREF,
	ActiveUntil,
	locale,
	state,
}: {
	cardImg: string;
	title: string;
	type: "exam" | "course";
	description: string;
	level: string;
	question: string;
	purchase?: boolean;
	HREF: string;
	ActiveUntil: string;
	locale: "en" | "ar";
	state: "active" | "in-active" | "expired" | "re-activate";
}) => {
	const getFontColorClass = (activeUntil: string | undefined): boolean => {
		// @ts-ignore
		const inputDate = new Date(activeUntil);
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);

		const timeDifference = inputDate.getTime() - currentDate.getTime();
		const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

		return daysDifference > 7;
	};
	const fontColorClass = getFontColorClass(ActiveUntil);

	return (
		<>
			<ExamCardShell href={HREF}>
				<div className={"imgContainer"}>
					<Image height={370} width={540} src={cardImg} alt={""} priority quality={100} />
				</div>
				<ExamCardCaption>
					<ExamCardTitle>{title}</ExamCardTitle>

					{type === "exam" ? (
						<ExamCardDescription>6 Domains • 28 Exams</ExamCardDescription>
					) : (
						<ExamCardDescription>6 lesson • 28 chapter</ExamCardDescription>
					)}

					{!purchase && (
						<ExamCardFooter>
							<Row $justify={"space-between"}>
								<Flexbox $align={"center"} $justify={"space-between"}>
									<ExamCardTag state={state} />
									<ExamCardFooter2>
										{state === "active" ? (
											<>
												<p className={"expiration"}>Expiration </p>
												<p className={"expirationDate"}>
													{DateFormatter(ActiveUntil, locale)}
												</p>{" "}
											</>
										) : (
											<ActiveTag state={state} />
										)}
									</ExamCardFooter2>
								</Flexbox>
							</Row>
						</ExamCardFooter>
					)}
				</ExamCardCaption>
			</ExamCardShell>
		</>
	);
};

export default ExamCard;
